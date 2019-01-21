import * as express from 'express';
import { ApolloEngine } from 'apollo-engine';
import { ApolloServer, mergeSchemas } from 'apollo-server-express';
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import {
  introspectSchema,
  makeRemoteExecutableSchema,
  IResolversParameter,
} from 'graphql-tools';
import { GraphQLSchema } from 'graphql';

interface Config {
  [name: string]: string;
}

export interface Schemas {
  [name: string]: GraphQLSchema;
}

interface Stitch {
  typeDefs: string;
  resolvers: (schemas: Schemas) => IResolversParameter;
}

class Gateway {
  private config: Config;
  private typeDefs: Stitch['typeDefs'] = '';
  private resolvers: Stitch['resolvers'] = () => ({});

  public constructor(config: Config) {
    this.config = config;
  }

  private async getSchema(uri: string) {
    const link = new HttpLink({ uri, fetch } as any);
    const schema = await introspectSchema(link);
    return makeRemoteExecutableSchema({ schema, link });
  }

  private async getSchemas(): Promise<Schemas> {
    const names = Object.keys(this.config);
    const endpoints = Object.values(this.config);
    const schemas = await Promise.all(endpoints.map(this.getSchema));

    const schema: Schemas = names.reduce(
      (s, name, i) => ({
        ...s,
        [name]: schemas[i],
      }),
      {}
    );

    return schema;
  }

  public stitch({ typeDefs, resolvers }: Stitch) {
    this.typeDefs = typeDefs;
    this.resolvers = resolvers;
    return this;
  }

  public async listen({ port }: { port: number }) {
    const schemas = await this.getSchemas();
    const resolvers = this.resolvers(schemas);
    const schema = mergeSchemas({
      schemas: [...Object.values(schemas), this.typeDefs],
      resolvers,
    });
    const engine = new ApolloEngine({ apiKey: process.env.ENGINE_API_KEY });
    const app = express();

    const server = new ApolloServer({
      schema,
      introspection: true,
      engine: false,
    });

    server.applyMiddleware({ app });
    return engine.listen({ port, expressApp: app });
  }
}

export default Gateway;

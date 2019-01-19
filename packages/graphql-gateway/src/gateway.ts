import * as express from 'express';
import { ApolloEngine } from 'apollo-engine';
import { ApolloServer, mergeSchemas } from 'apollo-server-express';
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import { introspectSchema, makeRemoteExecutableSchema } from 'graphql-tools';

interface Endpoint {
  endpoint: string;
}

interface Config {
  [name: string]: Endpoint;
}

class Gateway {
  private endpoints: string[];

  public constructor(config: Config) {
    this.endpoints = Object.values(config).map(({ endpoint }) => endpoint);
  }

  private async getSchema(endpoint: string) {
    const link = new HttpLink({ uri: endpoint, fetch } as any);
    const schema = await introspectSchema(link);
    return makeRemoteExecutableSchema({ schema, link });
  }

  public async listen({ port, apiKey }: any) {
    const schemas = await Promise.all(this.endpoints.map(this.getSchema));
    const schema = mergeSchemas({ schemas });
    const server = new ApolloServer({
      schema,
      introspection: true,
      engine: false,
    });
    const app = express();
    const engine = new ApolloEngine({ apiKey });

    server.applyMiddleware({ app });
    return engine.listen({ port, expressApp: app });
  }
}

export default Gateway;

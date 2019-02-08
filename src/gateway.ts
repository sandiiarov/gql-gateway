import { HttpLink } from 'apollo-link-http';
import { ApolloServer } from 'apollo-server';
import fs from 'fs';
import { GraphQLSchema, printSchema } from 'graphql';
import { makeRemoteExecutableSchema, mergeSchemas } from 'graphql-tools';
import fetch from 'isomorphic-fetch';
import { resolvers } from './resolvers';

interface Config {
  [name: string]: {
    definition: string;
    endpoint: string;
  };
}

class Gateway {
  private config: Config;

  public constructor(config: Config) {
    this.config = config;
  }

  private makeSchema(path: string, uri: string) {
    return makeRemoteExecutableSchema({
      schema: fs.readFileSync(path, 'utf8'),
      link: new HttpLink({ uri, fetch }),
    });
  }

  private makeSchemas() {
    const schemas: { [name: string]: GraphQLSchema } = Object.entries(
      this.config
    ).reduce(
      (config, [name, { definition, endpoint }]) => ({
        ...config,
        [name]: this.makeSchema(definition, endpoint),
      }),
      {}
    );

    return mergeSchemas({
      schemas: [
        ...Object.values(schemas),
        fs.readFileSync('./src/schema/link.graphql', 'utf8'),
      ],
      resolvers: resolvers(schemas),
    });
  }

  public listen({ port }: { port: string | number }) {
    const schema = this.makeSchemas();

    fs.writeFileSync('src/schema/schema.graphql', printSchema(schema));

    const server = new ApolloServer({ schema, introspection: true });

    return server.listen({ port });
  }
}

export default Gateway;

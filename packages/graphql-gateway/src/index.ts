import * as express from 'express';
import { ApolloEngine } from 'apollo-engine';
import { ApolloServer, mergeSchemas } from 'apollo-server-express';
import { getSchemas } from './getSchemas';

const app = express();

const linkTypeDefs = `
  extend type User {
    posts: [String]
  }
`;

(async () => {
  const [userSchema, postSchema] = await getSchemas([
    'http://localhost:4001/graphql',
    'http://localhost:4002/graphql',
  ]);

  const schema = mergeSchemas({
    schemas: [userSchema, postSchema, linkTypeDefs],
    resolvers: {
      User: {
        posts: {
          fragment: `fragment UserFragment on User { id }`,
          resolve(parent: { id: string }, args: any, context: any, info: any) {
            return info.mergeInfo.delegateToSchema({
              schema: postSchema,
              operation: 'query',
              fieldName: 'posts',
              args: {
                userId: parent.id,
              },
              context,
              info,
            });
          },
        },
      },
    },
  });

  const server = new ApolloServer({
    schema,
    tracing: true,
    cacheControl: true,
    engine: false,
  });

  server.applyMiddleware({ app });

  const engine = new ApolloEngine({
    apiKey: 'service:sandiiarov-7698:rv3UnQr4OVxC35oJ5pYCMw',
  });

  await engine.listen({ port: 4000, expressApp: app });

  console.log(`🚀  Server ready`);
})();

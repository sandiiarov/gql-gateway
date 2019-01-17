import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';
import { db } from './db';
import { resolvers } from './resolvers';

const server = new ApolloServer({
  typeDefs: importSchema('./src/schema.graphql'),
  resolvers,
  context: () => ({ db }),
});

server.listen({ port: 4002 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

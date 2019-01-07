import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';

const typeDefs = importSchema('./src/schema.graphql');

const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

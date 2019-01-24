import fs from 'fs';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { resolvers } from './resolvers';

const app = express();

const server = new ApolloServer({
  typeDefs: gql(fs.readFileSync('./src/schema.graphql', 'utf8')),
  resolvers: resolvers as any,
  introspection: true,
});

server.applyMiddleware({ app });

app.listen(4002, () => console.log(`RUNNING @ ${4002}`));

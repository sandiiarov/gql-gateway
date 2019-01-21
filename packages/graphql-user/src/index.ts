import './env';
import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import { db } from './db';

const { PORT = 4001 } = process.env;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers as any,
  context: () => ({ db }),
  introspection: true,
});

server.applyMiddleware({ app });

app.listen(PORT, () => console.log(`__RUNNING__ @ ${PORT}`));

export default app;

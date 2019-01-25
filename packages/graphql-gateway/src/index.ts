import { ApolloEngine } from 'apollo-engine';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import makeSchema from './makeSchema';

const app = express();

const engine = new ApolloEngine({
  apiKey: 'service:sandiiarov-7698:rv3UnQr4OVxC35oJ5pYCMw',
});

(async () => {
  const server = new ApolloServer({
    schema: await makeSchema(),
    introspection: true,
    engine: false,
  });

  app.use('/reset-schema', async (req, res, next) => {
    // @ts-ignore
    server.schema = await makeSchema();
    res.json({ status: 'OK' });
  });

  server.applyMiddleware({ app });

  engine.listen({ port: 4000, expressApp: app }, () => {
    console.log(`🚀 RUNNING @ ${4000}`);
  });
})();

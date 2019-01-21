import './env';
import Gateway from './gateway';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

const gateway = new Gateway({
  user: 'http://localhost:4001/graphql',
  post: 'http://localhost:4002/graphql',
});

gateway.stitch({ typeDefs, resolvers }).listen({ port: 4000 });

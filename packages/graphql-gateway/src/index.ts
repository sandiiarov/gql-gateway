import Gateway from './gateway';

const gateway = new Gateway({
  user: {
    definition: require.resolve('./schema/user.graphql'),
    endpoint: 'http://localhost:4001/graphql',
  },
  post: {
    definition: require.resolve('./schema/post.graphql'),
    endpoint: 'http://localhost:4002/graphql',
  },
});

gateway.listen({ port: 4000 });

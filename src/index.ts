import Gateway from './gateway';

const gateway = new Gateway({
  user: {
    definition: './src/schema/user.graphql',
    endpoint: 'http://localhost:4001/graphql',
  },
  post: {
    definition: './src/schema/post.graphql',
    endpoint: 'http://localhost:4002/graphql',
  },
});

gateway.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀  ${url}`);
});

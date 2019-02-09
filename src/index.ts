import Gateway from './tools/gateway';

export const gateway = new Gateway({
  user: {
    definition: './schema/user.graphql',
    endpoint: 'http://localhost:4001/graphql',
  },
  post: {
    definition: './schema/post.graphql',
    endpoint: 'http://localhost:4002/graphql',
  },
  link: {
    definition: './schema/link.graphql',
  },
});

export async function run() {
  const { url } = await gateway.listen(4000);
  console.log(`🚀  ${url}`);
}

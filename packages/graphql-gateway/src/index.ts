import Gateway from './gateway';

// const schema = mergeSchemas({
//   schemas: [userSchema, postSchema, linkTypeDefs],
//   resolvers: {
//     User: {
//       posts: {
//         fragment: `fragment UserFragment on User { id }`,
//         resolve(parent: { id: string }, args: any, context: any, info: any) {
//           return info.mergeInfo.delegateToSchema({
//             schema: postSchema,
//             operation: 'query',
//             fieldName: 'posts',
//             args: {
//               userId: parent.id,
//             },
//             context,
//             info,
//           });
//         },
//       },
//     },
//   },
// });

const gateway = new Gateway({
  user: {
    endpoint: 'http://localhost:4001/graphql',
  },
  post: {
    endpoint: 'http://localhost:4002/graphql',
  },
});

gateway.listen({ port: 4000 });

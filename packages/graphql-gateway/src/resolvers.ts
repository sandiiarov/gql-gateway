export const resolvers = ({ post }: any) => ({
  User: {
    posts: {
      fragment: `fragment UserFragment on User { id }`,
      resolve(parent: { id: string }, args: any, context: any, info: any) {
        return info.mergeInfo.delegateToSchema({
          schema: post,
          operation: 'query',
          fieldName: 'posts',
          args: {
            userId: parent.id,
          },
          context,
          info,
        });
      },
    },
  },
});

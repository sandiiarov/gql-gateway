import { GraphQLSchema } from 'graphql';
import { IDelegateToSchemaOptions, IResolversParameter } from 'graphql-tools';
import { PostsQueryArgs } from '../generated/post';
import { User } from '../generated/user';
interface Schemas {
  [name: string]: GraphQLSchema;
}

const UserFragment = `
  fragment UserFragment on User {
    id
  }
`;

export const resolvers = ({ post }: Schemas): IResolversParameter => ({
  User: {
    posts: {
      fragment: UserFragment,
      resolve(parent: User, args, context, info) {
        interface Options extends IDelegateToSchemaOptions {
          args: PostsQueryArgs;
        }

        const options: Options = {
          schema: post,
          operation: 'query',
          fieldName: 'posts',
          args: {
            where: { userId: parent.id },
          },
          context,
          info,
        };

        return info.mergeInfo.delegateToSchema(options);
      },
    },
  },
});

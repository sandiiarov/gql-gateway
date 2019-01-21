import { Context } from './types';

export const resolvers = {
  Query: {
    post(parent: any, args: { id: string }, context: Context) {
      return context.db.post({ where: { id: args.id } });
    },
    posts(parent: any, args: { userId: string }, context: Context) {
      return context.db.posts({ where: { userId: args.userId } });
    },
  },
};

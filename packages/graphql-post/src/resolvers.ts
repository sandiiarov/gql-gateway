import { Context } from './types';

export const resolvers = {
  Query: {
    post(parent: any, args: { id: string }, context: Context) {
      return context.db.findById(args.id);
    },
    posts(parent: any, args: { userId: string }, context: Context) {
      return context.db.findByUserId(args.userId);
    },
  },
};

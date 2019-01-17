import { Context } from './types';

export const resolvers = {
  Query: {
    user(parent: any, args: { id: string }, context: Context) {
      return context.db.findById(args.id);
    },
  },
};

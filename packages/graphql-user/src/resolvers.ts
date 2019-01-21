import { Context } from './types';

export const resolvers = {
  Query: {
    user(parent: any, args: { id: string }, context: Context) {
      return context.db.user({ where: { id: args.id } });
    },
    users(parent: any, args: any, context: Context) {
      return context.db.users();
    },
  },
};

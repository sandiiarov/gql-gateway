import fetch from 'node-fetch';
import { IResolvers } from '../generated/graphql';

const API = 'https://jsonplaceholder.typicode.com';

export const resolvers: IResolvers = {
  Query: {
    async post(parent, args, context) {
      const res = await fetch(`${API}/posts/${args.where.id}`);
      const user = await res.json();
      return user;
    },
    async posts(parent, args, context) {
      const res = await fetch(`${API}/posts?userId=${args.where.userId}`);
      const users = await res.json();
      return users;
    },
  },
};

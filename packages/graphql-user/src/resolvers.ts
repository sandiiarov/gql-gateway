import fetch from 'isomorphic-fetch';
import { IResolvers } from '../generated/graphql';

const API = 'https://jsonplaceholder.typicode.com';

export const resolvers: IResolvers = {
  Query: {
    async user(parent, args, context) {
      const res = await fetch(`${API}/users/${args.where.id}`);
      const user = await res.json();
      return user;
    },
    async users(parent, args, context) {
      const res = await fetch(`${API}/users`);
      const users = await res.json();
      return users;
    },
  },
};

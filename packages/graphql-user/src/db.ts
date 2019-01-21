import fetch from 'node-fetch';

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

interface UserArgs {
  where: { id: string };
}

export interface DB {
  user: (args: UserArgs) => Promise<User>;
  users: () => Promise<User[]>;
}

const { API } = process.env;

export const db: DB = {
  user: async args => {
    const res = await fetch(`${API}/users/${args.where.id}`);
    const user = await res.json();
    return user;
  },
  users: async () => {
    const res = await fetch(`${API}/users`);
    const users = await res.json();
    return users;
  },
};

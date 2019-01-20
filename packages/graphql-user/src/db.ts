import fetch from 'node-fetch';

export interface User {
  id: string;
  username: string;
  email: string;
}

export interface DB {
  findById: (id: string) => Promise<User>;
}

export const db: DB = {
  findById: async userId => {
    const res = await fetch(`${process.env.API}/users/${userId}`);
    const user = await res.json();
    return user;
  },
};

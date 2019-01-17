import fetch from 'node-fetch';

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

export interface DB {
  findById: (id: string) => Promise<User>;
}

const API = 'https://jsonplaceholder.typicode.com';

export const db: DB = {
  findById: async userId => {
    const res = await fetch(`${API}/users/${userId}`);
    const user = await res.json();
    return user;
  },
};

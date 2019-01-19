import fetch from 'node-fetch';

export interface Post {
  id: string;
  title: string;
  body: string;
}

export interface DB {
  findById: (id: string) => Promise<Post>;
  findByUserId: (id: string) => Promise<Post[]>;
}

export const db: DB = {
  findById: async postId => {
    const res = await fetch(`${process.env.API}/posts/${postId}`);
    const post = await res.json();
    return post;
  },
  findByUserId: async userId => {
    const res = await fetch(`${process.env.API}/posts?userId=${userId}`);
    const posts = await res.json();
    return posts;
  },
};

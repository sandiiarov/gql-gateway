import fetch from 'node-fetch';

export interface Post {
  id: string;
  body: string;
}

interface PostArgs {
  where: { id: string };
}

interface PostsArgs {
  where: { userId: string };
}

export interface DB {
  post: (args: PostArgs) => Promise<Post>;
  posts: (args: PostsArgs) => Promise<Post[]>;
}

const { API } = process.env;

export const db: DB = {
  post: async args => {
    const res = await fetch(`${API}/posts/${args.where.id}`);
    const post = await res.json();
    return post;
  },
  posts: async args => {
    const res = await fetch(`${API}/posts?userId=${args.where.userId}`);
    const posts = await res.json();
    return posts;
  },
};

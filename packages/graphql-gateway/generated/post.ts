export type Maybe<T> = T | null;

export interface PostWhereInput {
  id: string;
}

export interface PostsWhereInput {
  userId: string;
}

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE"
}

/** The `Upload` scalar type represents a file upload. */
export type Upload = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  post: Post;

  posts: Post[];
}

export interface Post {
  id: string;

  title: string;

  body: string;
}

// ====================================================
// Arguments
// ====================================================

export interface PostQueryArgs {
  where: PostWhereInput;
}
export interface PostsQueryArgs {
  where: PostsWhereInput;
}

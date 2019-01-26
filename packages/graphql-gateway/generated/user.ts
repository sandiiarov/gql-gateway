export type Maybe<T> = T | null;

export interface UserWhereInput {
  id: string;
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
  user: User;

  users: User[];
}

export interface User {
  id: string;

  name: string;

  username: string;

  email: string;
}

// ====================================================
// Arguments
// ====================================================

export interface UserQueryArgs {
  where: UserWhereInput;
}

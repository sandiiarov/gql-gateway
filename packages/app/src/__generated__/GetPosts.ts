/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPosts
// ====================================================

export interface GetPosts_posts {
  __typename: "Post";
  id: string;
  title: string;
  body: string;
}

export interface GetPosts {
  posts: GetPosts_posts[];
}

export interface GetPostsVariables {
  userId: string;
}

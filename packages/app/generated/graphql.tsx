export type Maybe<T> = T | null;

export interface UserWhereInput {
  id: string;
}

export interface PostWhereInput {
  id: string;
}

export interface PostsWhereInput {
  userId: string;
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

/** The `Upload` scalar type represents a file upload. */
export type Upload = any;

// ====================================================
// Documents
// ====================================================

export interface GetPostsVariables {
  userId: string;
}

export interface GetPostsQuery {
  __typename?: 'Query';

  posts: GetPostsPosts[];
}

export interface GetPostsPosts {
  __typename?: 'Post';

  id: string;

  title: string;

  body: string;
}

import * as ReactApollo from 'react-apollo';
import * as React from 'react';

import gql from 'graphql-tag';

// ====================================================
// Components
// ====================================================

export const GetPostsDocument = gql`
  query GetPosts($userId: ID!) {
    posts(where: { userId: $userId }) {
      id
      title
      body
    }
  }
`;
export class GetPostsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetPostsQuery, GetPostsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetPostsQuery, GetPostsVariables>
        query={GetPostsDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetPostsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetPostsQuery, GetPostsVariables>
> &
  TChildProps;
export function GetPostsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetPostsQuery,
        GetPostsVariables,
        GetPostsProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetPostsQuery,
    GetPostsVariables,
    GetPostsProps<TChildProps>
  >(GetPostsDocument, operationOptions);
}

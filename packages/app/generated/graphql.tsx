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
  Public = "PUBLIC",
  Private = "PRIVATE"
}

/** The `Upload` scalar type represents a file upload. */
export type Upload = any;

// ====================================================
// Documents
// ====================================================

export type GetUserVariables = {
  id: string;
};

export type GetUserQuery = {
  __typename?: "Query";

  user: GetUserUser;
};

export type GetUserUser = {
  __typename?: "User";

  id: string;

  name: string;

  email: string;
};

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

// ====================================================
// Components
// ====================================================

export const GetUserDocument = gql`
  query GetUser($id: ID!) {
    user(where: { id: $id }) {
      id
      name
      email
    }
  }
`;
export class GetUserComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetUserQuery, GetUserVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetUserQuery, GetUserVariables>
        query={GetUserDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetUserProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetUserQuery, GetUserVariables>
> &
  TChildProps;
export function GetUserHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetUserQuery,
        GetUserVariables,
        GetUserProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetUserQuery,
    GetUserVariables,
    GetUserProps<TChildProps>
  >(GetUserDocument, operationOptions);
}

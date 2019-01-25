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

// ====================================================
// Components
// ====================================================

export const GetUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } }
          },
          directives: []
        }
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" }
                      }
                    }
                  ]
                }
              }
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "id" },
                  arguments: [],
                  directives: []
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "name" },
                  arguments: [],
                  directives: []
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "email" },
                  arguments: [],
                  directives: []
                }
              ]
            }
          }
        ]
      }
    }
  ],
  loc: { start: 0, end: 109 }
};
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

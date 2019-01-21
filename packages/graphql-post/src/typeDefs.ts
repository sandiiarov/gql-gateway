import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Post {
    id: ID!
    body: String!
  }

  type Query {
    post(id: ID!): Post!
    posts(userId: ID!): [Post!]!
  }
`;

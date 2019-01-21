import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
  }

  type Query {
    user(id: ID!): User!
    users: [User!]!
  }
`;

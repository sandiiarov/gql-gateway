import { HttpLink } from 'apollo-link-http';
import fs from 'fs';
import {
  introspectSchema,
  makeRemoteExecutableSchema,
  mergeSchemas,
} from 'graphql-tools';
import fetch from 'isomorphic-fetch';
import { resolvers } from './resolvers';

const schema = async (uri: string) => {
  const link = new HttpLink({ uri, fetch });
  const schema = await introspectSchema(link);

  return makeRemoteExecutableSchema({ schema, link });
};

export default async () => {
  const UserSchema = await schema('http://localhost:4001/graphql');
  const PostSchema = await schema('http://localhost:4002/graphql');

  return mergeSchemas({
    schemas: [
      UserSchema,
      PostSchema,
      fs.readFileSync('./src/schema.graphql', 'utf8'),
    ],
    resolvers: resolvers({ user: UserSchema, post: PostSchema }),
  });
};

import { HttpLink } from 'apollo-link-http';
import fs from 'fs';
import { makeRemoteExecutableSchema } from 'graphql-tools';
import fetch from 'isomorphic-fetch';

export function makeRemoteSchema(path: string, uri: string) {
  return makeRemoteExecutableSchema({
    schema: fs.readFileSync(path, 'utf8'),
    link: new HttpLink({ uri, fetch }),
  });
}

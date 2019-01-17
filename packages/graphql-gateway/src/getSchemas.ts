import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import { introspectSchema, makeRemoteExecutableSchema } from 'graphql-tools';

const getSchema = async (uri: string) => {
  const link = new HttpLink({ fetch, uri } as any);
  const schema = await introspectSchema(link);
  return makeRemoteExecutableSchema({ schema, link });
};

export const getSchemas = async (urls: string[]) => {
  const schemas = await Promise.all(urls.map(getSchema));
  return schemas;
};

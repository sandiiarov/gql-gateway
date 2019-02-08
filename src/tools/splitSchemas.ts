import fs from 'fs';
import { GraphQLSchema } from 'graphql';
import { Config } from './gateway';
import { makeRemoteSchema } from './makeRemoteSchema';

export function splitSchemas(config: Config) {
  const schemas = Object.entries(config);

  const remote: { [name: string]: GraphQLSchema } = schemas.reduce(
    (config, [name, { definition, endpoint }]) => {
      if (endpoint === undefined) return config;
      return { ...config, [name]: makeRemoteSchema(definition, endpoint) };
    },
    {}
  );

  const local: { [name: string]: string } = schemas.reduce(
    (config, [name, { definition, endpoint }]) => {
      if (endpoint !== undefined) return config;
      return { ...config, [name]: fs.readFileSync(definition, 'utf8') };
    },
    {}
  );

  return { remote, local };
}

const run = require('@lerna/run');
const waitPort = require('wait-port');

const graphql = async () => {
  run({ scope: '@gql-gateway/graphql-user', script: 'start' });
  run({ scope: '@gql-gateway/graphql-post', script: 'start' });

  await waitPort({ host: 'localhost', port: 4001 });
  await waitPort({ host: 'localhost', port: 4002 });

  run({ scope: '@gql-gateway/graphql-gateway', script: 'start' });
};

const tsc = async () => {
  await run({ scope: '@gql-gateway/app', script: 'generate' });
  run({ scope: '@gql-gateway/app', script: 'tsc' });
};

module.exports = {
  graphql,
  tsc,
};

const run = require('@lerna/run');
const waitPort = require('wait-port');

const graphql = async mode => {
  const script = mode === 'production' ? 'start' : 'dev';

  run({ scope: '@gql-gateway/graphql-user', script });
  run({ scope: '@gql-gateway/graphql-post', script });

  await waitPort({ host: 'localhost', port: 4001 });
  await waitPort({ host: 'localhost', port: 4002 });

  run({ scope: '@gql-gateway/graphql-gateway', script });
};

module.exports = {
  graphql,
};

const run = require('@lerna/run');
const waitPort = require('wait-port');

const script = process.env.NODE_ENV === 'production' ? 'start' : 'dev';

const bootstrap = async () => {
  run({ scope: '@gql-gateway/graphql-user', script });
  run({ scope: '@gql-gateway/graphql-post', script });
  await waitPort({ host: 'localhost', port: 4001 });
  await waitPort({ host: 'localhost', port: 4002 });
  run({ scope: '@gql-gateway/graphql-gateway', script });

  if (process.env.NODE_ENV === 'development') {
    run({ scope: '@gql-gateway/app', script: 'start' });
  }
};

bootstrap();

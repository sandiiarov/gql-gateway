const run = require('@lerna/run');
const waitPort = require('wait-port');
const spawn = require('cross-spawn');

const bootstrap = async () => {
  run({ scope: '@gql-gateway/graphql-user', script: 'start' });
  run({ scope: '@gql-gateway/graphql-post', script: 'start' });
  await waitPort({ host: 'localhost', port: 4001 });
  await waitPort({ host: 'localhost', port: 4002 });
  run({ scope: '@gql-gateway/graphql-gateway', script: 'start' });
  await waitPort({ host: 'localhost', port: 4000 });
  spawn('apollo', ['service:check', '--key', process.env.ENGINE_API_KEY], {
    stdio: 'inherit',
  });
};

bootstrap();

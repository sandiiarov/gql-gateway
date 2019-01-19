const runAll = require('npm-run-all');
const waitPort = require('wait-port');

const bootstrap = async () => {
  runAll(['user', 'post'], { parallel: true });
  await waitPort({ host: 'localhost', port: 4001 });
  await waitPort({ host: 'localhost', port: 4002 });
  runAll(['gateway']);
};

bootstrap();

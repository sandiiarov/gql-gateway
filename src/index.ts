import config from '../config.json';
import Gateway from './tools/gateway';

export const gateway = new Gateway(config);

export async function run() {
  const { url } = await gateway.listen(4000);
  console.log(`🚀  ${url}`);
}

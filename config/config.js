import 'dotenv/config';
import { expect } from '@playwright/test';

// dApp under test
const dAppURL = 'https://app.rootstockcollective.xyz/';

// Custom network under test
const networkConfiguration = {
  networkName: 'Rootstock',
  rpcUrl: 'https://public-node.rsk.co',
  chainId: '30',
  symbol: 'RBTC',
  isTestnet: false
}

Object.assign(global, {
  expect: expect,
  BASE_URL: dAppURL,
  NETWORK: networkConfiguration,
  SECRET: process.env.secretWordsOrPrivateKey,
  PASSWORD: process.env.password
});

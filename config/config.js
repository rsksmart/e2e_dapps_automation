import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
import { expect } from "@playwright/test";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, '.env');
dotenv.config({ path: envPath });

// dApp under test
const dAppURL = 'https://wallet.testnet.rollup.rif.technology/';

// Custom network under test
const networkConfiguration = {
  networkName: 'Rootstock',
  rpcUrl: 'https://public-node.testnet.rsk.co',
  chainId: '31',
  symbol: 'RBTC',
  isTestnet: true
}

Object.assign(global, {
    expect: expect,
    BASE_URL: dAppURL,
    NETWORK: networkConfiguration,
    SECRET: process.env.secretWordsOrPrivateKey,
    PASSWORD: process.env.password
});

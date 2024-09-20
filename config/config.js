import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
//import { expect } from "@playwright/test";

/**
 * TODO: Migrate this to Cucumber World
 * test config
 */
 import { testWithSynpress } from '@synthetixio/synpress';
 import { metaMaskFixtures } from '@synthetixio/synpress/playwright';
 import basicSetup from '../src/test/wallet-setup/metamask.default.setup.js'
 const test = testWithSynpress(metaMaskFixtures(basicSetup));
 const { expect } = test;


const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, '.env');
dotenv.config({ path: envPath });

// dApp under test
const dAppURL = 'https://testnet.app.rootstockcollective.xyz/'; //Rootstock Collective Testnet

// Custom network under test
const networkConfiguration = {
  networkName: 'Rootstock',
  rpcUrl: 'https://public-node.testnet.rsk.co',
  chainId: '31',
  symbol: 'RBTC',
  isTestnet: true
}

Object.assign(global, {
  metaMaskFixtures: metaMaskFixtures,
    expect: expect,
    BASE_URL: dAppURL,
    NETWORK: networkConfiguration,
    SECRET: process.env.SEED_PHRASE,
    PASSWORD: process.env.PASSWORD
});

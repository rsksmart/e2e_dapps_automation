import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
import { expect } from "@playwright/test";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, '.env');
dotenv.config({ path: envPath });

Object.assign(global, {
    expect: expect,
    BASE_URL: 'https://wallet.testnet.rollup.rif.technology/',
    SECRET: process.env.secretWordsOrPrivateKey,
    NETWORK: process.env.network,
    PASSWORD: process.env.password
  });

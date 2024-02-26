# E2E Browser Automation for web3 dApps
Run native automation for web3 dApps using Cucumber-Playwright-Synpress in Javascript.
In the current version of Synpress, only MetaMask wallet is supported.
Support for other wallets is being added at [Synpress New Dawn](https://github.com/Synthetixio/synpress/tree/new-dawn).

## Table of Contents
- [E2E Browser Automation for web3 dApps](#e2e-browser-automation-for-web3-dapps)
    - [Project Structure](#project-structure)
    - [Installation](#installation)
      - [dApp & Blockchain configuration](#dapp--blockchain-configuration)
    - [Running Tests🚀](#running-tests-)
    - [Reporting 📊](#reporting-)
    - [XRay Integration](#xray-integration)
    - [Sources 📚](#sources)

## Project Structure

```
e2e_dapps_automation/
 ├── config/
 │    ├── xray/
 │         ├── cucumber.config.json             # XRay project configuration to upload tests/results to Jira XRay
 │    ├── .env                                  # private local file to store wallet seeds (testing purposes)
 ├── src/
 │    ├── hooks/                                
 │         ├── fixture.js                       # Metamask configuration setup + Synpress integration
 │         ├── hooks.js                         # Cucumber hooks
 │    ├── pages/                        
 │         ├── demo.page.js                     # PageObject class with elements & methods 
 │    ├── test/
 │         ├── features/                        # Cucumber framework features folder
 │              ├── _dappLivingDocumentation/
 │                   ├── 1_QACT-292.feature     # Demo feature with end-to-end scenarios
 │         ├── stepDefinitions          
 │              ├── login.steps.js              # Class to model behaviors, connects test layer with page methods
 | cucumber.json                                # Cucumber config file
```

## Installation

- Clone the project `https://github.com/rsksmart/e2e_dapps_automation`

- Install dependencies `npm i` in the terminal or run the `npm:install` script

- Create a `.env` file inside `config` folder containing your MetaMask wallet address information (seed & password) as follows. Example:

```
secretWordsOrPrivateKey=test test test test test test test test test test test test
password=Tester@1234
```

* Please note that this is sensitive information, even if it is stored locally in the `.env` file. If shared anyhow you could potentially loose all your funds. Ensure the provided wallet is for testing purposes only.

- Metamask version can be provided either in the `.env` file or in the `src/hooks/fixtures.js` file as follows:

```    
const metamaskPath = await prepareMetamask(
    process.env.METAMASK_VERSION || "10.25.0"
);
```

### dApp & Blockchain configuration

- In order to be able to test your own dApp on your preferred blockchain, go to `config/config.js` and modify the following parameters:

```
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
```

## Running Tests 🚀  

Since this is a boilerplate project, just a 'demo.feature' has been implemented.
Feel free to build your test suite at `src/test/features/_dappLivingDocumentation/`

- Execute `test` or `npm test` script to run the tests using chromium

## Reporting 📊
- Generated reports will be located at `reports` folder
- Since Cucumber is the chosen runner, reports and other config options can be found at `e2e_dapps_automation/cucumber.json`

## XRay integration
### Downloading/Uploading Cucumber features & Creating Test Executions in Jira

- In order to submit the local test execution to Jira, execute `cucumber:submit_results` script. Remember to configure the `config/xray/cucumber.config.json` accordingly and have set the Jira XRay credentials in your environment variables.

Please refer to the repository [@xray-app/xray-automation module](https://github.com/rsksmart/xray-automation) to learn more about XRay Jira integration.


## Sources

- [Playwright](https://playwright.dev/docs/intro)
- [Cucumber](https://cucumber.io/docs/cucumber/)
- [Synpress](https://github.com/Synthetixio/synpress)
- [Synpress New Dawn](https://github.com/Synthetixio/synpress/tree/new-dawn)

## Next steps
- Playwright/Synpress wrappers & helpers
- Synpress New Dawn branch integration

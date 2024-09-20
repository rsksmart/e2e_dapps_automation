import { BeforeAll, AfterAll, Before, After } from '@cucumber/cucumber';
// import { MetaMask } from '@synthetixio/synpress/playwright';
// import defaultSetup from '../test/wallet-setup/metamask.default.setup.js'

// import { testWithSynpress } from '@synthetixio/synpress'
// import { MetaMask, metaMaskFixtures } from '@synthetixio/synpress/playwright'
// import basicSetup from './wallet-setup/basic.setup'

// const test = testWithSynpress(metaMaskFixtures(basicSetup))

// const { expect } = test

// test('should connect wallet to the MetaMask Test Dapp', async ({ context, page, metamaskPage, extensionId }) => {
//   const metamask = new MetaMask(context, metamaskPage, basicSetup.walletPassword, extensionId)

//   await page.goto('/')

//   await page.locator('#connectButton').click()
//   await metamask.connectToDapp()
//   await expect(page.locator('#accounts')).toHaveText('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266')

//   await page.locator('#getAccounts').click()
//   await expect(page.locator('#getAccountsResult')).toHaveText('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266')
// })

BeforeAll({timeout: 60 * 1000}, async function () {
    // console.log("Loading metamask extension");
    // console.log(global.test);
    // console.log(context);
    // console.log(page);
    // console.log(global.context);
    // console.log(global.page);
    // console.log(extensionId);
    // const metamask = new MetaMask(context, metamaskPage, global.PASSWORD, extensionId);

});

// Before(async function () {
//     console.log("Selecting page context for dApp interaction");
//     // Loading our dApp in a new tab
//     // global.page = await global.context.newPage();
    
//     // Reusing initial blank tab for our dApp
//     global.page = await global.context.pages()[0];
//     const mainWindow = global.page;
//     await mainWindow.bringToFront();

//     // // NEW DAWN
//     // await page.goto(global.BASE_URL);

//     // await page.locator('#connectButton').click()

//     // await metamask.connectToDapp(['Account 1'])
// });

// After(async function () {
//     console.log("Close dApp page");  
//     await global.page.close();
// });

// AfterAll(async function () {
//     console.log("Close browser & context");
//     await global.context.close();
// });
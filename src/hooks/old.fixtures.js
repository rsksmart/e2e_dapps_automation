// import { chromium } from "@playwright/test";
// import initialSetup_pkg from '@synthetixio/synpress/commands/metamask.js';
// import setExpectInstance_pkg from '@synthetixio/synpress/commands/playwright.js';
// import prepareMetamask_pkg from "@synthetixio/synpress/helpers.js";

import { MetaMask, defineWalletSetup, getExtensionId } from '@synthetixio/synpress';



// const { setExpectInstance } = setExpectInstance_pkg;
// const { initialSetup } = initialSetup_pkg;
// const { prepareMetamask } = prepareMetamask_pkg;

// async function metamaskConfig() {
//     // required for synpress as it shares same expect instance as playwright
//     await setExpectInstance(global.expect);

//     // download metamask
//     const metamaskPath = await prepareMetamask(
//       process.env.METAMASK_VERSION || "10.25.0"
//     );

//     // prepare browser args
//     const browserArgs = [
//       `--disable-extensions-except=${metamaskPath}`,
//       `--load-extension=${metamaskPath}`,
//       "--remote-debugging-port=9222",
//     ];

//     if (process.env.CI) {
//       browserArgs.push("--disable-gpu");
//     }

//     if (process.env.HEADLESS_MODE) {
//       browserArgs.push("--headless=new");
//     }

//     // launch browser
//     global.context = await chromium.launchPersistentContext("", {
//       headless: false,
//       args: browserArgs,
//     });

//     // wait for metamask
//     await context.pages()[0].waitForTimeout(2000);

//     // setup metamask
//     await initialSetup(chromium, {
//       secretWordsOrPrivateKey: global.SECRET,
//       network: global.NETWORK,
//       password: global.PASSWORD,
//       enableAdvancedSettings: true,
//     });

    // await use(context);
    // await context.close();
    // await resetState();
// }

//export default metamaskConfig;


export default defineWalletSetup(password, async (context, walletPage) => { 

  const extensionId = await getExtensionId(context, 'MetaMask');

  const metamask = new MetaMask(context, walletPage, password, extensionId);

  await metamask.importWallet(global.SECRET);

  //const page = await context.newPage();

  // Go to a locally hosted MetaMask Test Dapp.
  // await page.goto('http://localhost:9999')

  // await page.locator('#connectButton').click()

  // await metamask.connectToDapp(['Account 1'])
});
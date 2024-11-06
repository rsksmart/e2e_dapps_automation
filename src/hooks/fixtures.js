import { chromium } from '@playwright/test';
import initialSetup_pkg from '@synthetixio/synpress/commands/metamask.js';
import setExpectInstance_pkg from '@synthetixio/synpress/commands/playwright.js';
import prepareMetamask_pkg from '@synthetixio/synpress/helpers.js';

const { setExpectInstance } = setExpectInstance_pkg;
const { initialSetup } = initialSetup_pkg;
const { prepareMetamask } = prepareMetamask_pkg;

async function metamaskConfig() {
    // required for synpress as it shares same expect instance as playwright
    await setExpectInstance(global.expect);

    // download metamask
    const metamaskPath = await prepareMetamask(
      process.env.METAMASK_VERSION || "11.15.0"
    );

    // prepare browser args
    const browserArgs = [
      `--disable-extensions-except=${metamaskPath}`,
      `--load-extension=${metamaskPath}`,
      "--remote-debugging-port=9222",
    ];

    if (process.env.CI) {
      browserArgs.push("--disable-gpu");
    }

    if (process.env.HEADLESS_MODE) {
      browserArgs.push("--headless=new");
    }

    // launch browser
    global.context = await chromium.launchPersistentContext("", {
      headless: false,
      args: browserArgs,
    });

    // wait for metamask
    await context.pages()[0].waitForTimeout(3000);

    // setup metamask
    await initialSetup(chromium, {
      secretWordsOrPrivateKey: global.SECRET,
      network: global.NETWORK,
      password: global.PASSWORD,
      enableAdvancedSettings: true,
    });
}

export default metamaskConfig;
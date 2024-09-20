import { Given, When, Then } from '@cucumber/cucumber';
//import metamask from "@synthetixio/synpress/commands/metamask.js";
import DemoPage from "../pages/demo.page.js"

import { testWithSynpress } from '@synthetixio/synpress';
import { MetaMask, metaMaskFixtures } from '@synthetixio/synpress/playwright';
import defaultSetup from '../wallet-setup/metamask.default.setup.js'

const test = testWithSynpress(metaMaskFixtures(defaultSetup));
const { expect } = test

Given(/^I open the dApp website$/, {timeout: 10 * 1000}, async function () {

	//await DemoPage.navigateToDapp(global.BASE_URL);
});

When(/^I connect metamask$/, async function () {
	//await DemoPage.connectWallet();
	// await metamask.acceptAccess();
});

Then(/^I verify my wallet is successfully connected to the dApp$/, async function () {
	await expect(page.getByText('My Collective')).toBeDisplayed();
});

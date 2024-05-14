import { Given, When, Then } from '@cucumber/cucumber';
import metamask from "@synthetixio/synpress/commands/metamask.js";
import DemoPage from "../../pages/demo.page.js"

Given(/^I open the dApp website$/, {timeout: 10 * 1000}, async function () {
	await DemoPage.navigateToDapp(global.BASE_URL);
});

When(/^I connect metamask$/, async function () {
	await DemoPage.connectWallet();
	await metamask.acceptAccess();
});

Then(/^I verify my wallet is successfully connected to the dApp$/, async function () {
	await expect(page.locator(".chakra-button .css-0")).toHaveText("0xf3...2266");
});

import { Given, When, Then } from '@cucumber/cucumber';
import metamask from "@synthetixio/synpress/commands/metamask.js";
import DemoPage from "../../pages/demo.page.js"

Given(/^I open the dApp website$/, {timeout: 20 * 1000}, async function () {
	await DemoPage.navigateToDapp(global.BASE_URL);
});

When(/^I connect metamask$/, {timeout: 20 * 1000}, async function () {
	await DemoPage.connectWallet();
	await metamask.acceptAccess();
});

Then(/^I verify my wallet is successfully connected to the dApp$/, {timeout: 20 * 1000}, async function () {
	await expect(page.locator(".address")).toHaveText("0xf39...92266");
});

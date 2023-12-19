import { Given, When, Then } from '@cucumber/cucumber';
import metamask from "@synthetixio/synpress/commands/metamask.js";
import DemoPage from "../../pages/demo.page.js"

Given(/^I open Dapp website$/, async function () {
	await DemoPage.navigateToDapp(global.BASE_URL);
});

When(/^I navigate to Rollup Explorer$/, async function () {
	await DemoPage.navigateToRollupExplorer();
});

Then(/^I validate Rollup Explorer opens$/, async function () {
	await DemoPage.validateExplorer();
});

Then(/^I connect metamask$/, {timeout: 20 * 1000}, async function () {
	await DemoPage.connectWallet();
	await metamask.acceptAccess();
	await expect(page.locator(".address")).toHaveText(
		"0xf39...92266"
	);
});
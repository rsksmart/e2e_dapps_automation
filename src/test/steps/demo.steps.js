import { When, Then } from '@cucumber/cucumber';
import metamask from '@synthetixio/synpress/commands/metamask.js';
import DemoPage from '../../pages/demo.page.js';

When(/^I connect metamask to the dApp website$/, {timeout: 20 * 1000}, async function () {
	await DemoPage.connectWallet();
	await metamask.acceptAccess();
});

Then(/^I verify my wallet is successfully connected to the dApp$/, async function () {
	await expect(page.locator('.underline-offset-1')).toHaveText('0xf39F…92266');
});

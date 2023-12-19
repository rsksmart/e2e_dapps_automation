let newPage;

class DemoPage {

	get btnConnectWallet() {
		return page.locator('[id="btn-core-connect-wallet"]');
	}

	get btnConnectMetamask() {
		return page.locator('.wallet-button-styling .svelte-1vlog3j').first();
	}

	get linkRollupExplorer() {
		return page.locator('.footer-link');
	}

	async navigateToDapp(url) {
		await page.goto(url);
	}

	async connectWallet(){
		await this.btnConnectWallet.click();
		await this.btnConnectMetamask.click();
	}

	async navigateToRollupExplorer() {
		await this.linkRollupExplorer.click();
		const pagePromise = context.waitForEvent('page');
		newPage = await pagePromise;
		await newPage.waitForLoadState();
	}

	async validateExplorer() {
		const title = await newPage.title();
		await expect(title).toContain("RIF Rollup Testnet Explorer");
	}
	
}

export default new DemoPage(); 
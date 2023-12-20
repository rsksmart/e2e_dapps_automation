class DemoPage {

	get btnConnectWallet() {
		return page.locator('[id="btn-core-connect-wallet"]');
	}

	get btnConnectMetamask() {
		return page.locator('.wallet-button-styling .svelte-1vlog3j').first();
	}

	async navigateToDapp(url) {
		await page.goto(url);
	}

	async connectWallet(){
		await this.btnConnectWallet.click();
		await this.btnConnectMetamask.click();
	}
}

export default new DemoPage(); 
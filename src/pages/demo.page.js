class DemoPage {

	// Page elements
	
	get btnConnectWallet() {
		return page.getByText('Connect wallet');
	}
	
	get btnBrowserWallet() {
		return page.getByText('Browser Wallet');
	}

	// Methods

	async navigateToDapp(url) {
		await page.goto(url);
	}

	async connectWallet(){
		await this.btnConnectWallet.click();
		await this.btnBrowserWallet.click();
	}
}

export default new DemoPage(); 
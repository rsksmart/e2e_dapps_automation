class DemoPage {

	get btnConnectMetamask() {
		return page.locator('h3=MetaMask');
	}

	async navigateToDapp(url) {
		await page.goto(url);
	}

	async connectWallet(){
		await this.btnConnectMetamask.click();
	}
}

export default new DemoPage(); 
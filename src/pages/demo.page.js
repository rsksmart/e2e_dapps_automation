class DemoPage {

	// Page elements
	
	get btnConnectWallet() {
		return page.getByText('Connect wallet');
	}

	get btnAgreeTerms() {
		return page.getByText('I Agree');
	}

	// Methods

	async connectWallet(){
		await this.btnConnectWallet.click();
		await this.btnAgreeTerms.click();
	}
}

export default new DemoPage(); 
Feature: Demo to test Cucumber + Playwright + Synpress

	@regression
	Scenario: Validate metamask connects to Rootstock dApp
		When I connect metamask to the dApp website
		Then I verify my wallet is successfully connected to the dApp
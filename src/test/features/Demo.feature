Feature: Demo to test Cucumber + Playwright + Synpress

	Scenario: Validate metamask connects to Rootstock dApp
		Given I open the dApp website
		When I connect metamask
		Then I verify my wallet is successfully connected to the dApp
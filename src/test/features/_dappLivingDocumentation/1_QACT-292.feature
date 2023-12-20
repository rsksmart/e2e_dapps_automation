@REQ_QACT-292
Feature: Demo to test Cucumber + Playwright + Synpress

	@TEST_QACT-293 @TEST_DEMO
	Scenario: Validate metamask connects to Rootstock dApp
		Given I open the dApp website
		When I connect metamask
		Then I verify my wallet is successfully connected to the dApp
		

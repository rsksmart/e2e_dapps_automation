@REQ_QACT-292
Feature: Demo to test Cucumber + Playwright + Synpress

	@TEST_QACT-306 @TESTSET_QACT-307 @TESTSET_QACT-308 @TEST_DEMO_1
	Scenario: CLONE - Validate metamask connects to Rootstock dApp
		Given I open the dApp website
		When I connect metamask
		Then I verify my wallet is successfully connected to the dApp
		
		

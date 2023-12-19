Feature: Demo to test Cucumber + Playwright

	@TEST_DEMO
	Scenario: Verify IOV website is open successfully
		Given I open Dapp website
	#	When I navigate to Rollup Explorer
	#	Then I validate Rollup Explorer opens
		And I connect metamask

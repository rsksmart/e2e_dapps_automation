Run native automation for dApps using cucumber-playwright-synpress in Javascript.

## Running tests & Reports

Follow the below commands 
- Clone the project - `https://github.com/javicoin/cucumber-playwright-synpress`.

- Install dependencies `npm i`

- Create a `.env` file inside `config` containing MetaMask configutarion. Example:
```
secretWordsOrPrivateKey=test test test test test test test test test test test test
network=optimism
password=Tester@1234
```

- Execute `test` or `npm test` script to run the tests using chromium

- Generated reports located at "test-results" folder

## Next steps short term
- Playwright wrappers & helpers
- XRay integration

## Sources

- [Playwright](https://playwright.dev/docs/intro)
- [Cucumber](https://cucumber.io/docs/cucumber/)
- [Synpress](https://github.com/synpress-io/synpress-examples)

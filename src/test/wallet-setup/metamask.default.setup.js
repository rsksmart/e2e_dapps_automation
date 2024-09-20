import { defineWalletSetup } from '@synthetixio/synpress';
import { MetaMask, getExtensionId } from '@synthetixio/synpress/playwright';
import 'dotenv/config'

const SEED_PHRASE = process.env.SEED_PHRASE;
const PASSWORD = process.env.PASSWORD;

export default defineWalletSetup(PASSWORD, async (context, walletPage) => {
  // This is a workaround for the fact that the MetaMask extension ID changes.
  // This workaround won't be needed in the near future! 😁

  const extensionId = await getExtensionId(context, 'MetaMask');

  const metamask = new MetaMask(context, walletPage, PASSWORD, extensionId);

  await metamask.importWallet(SEED_PHRASE);

  //FIXME: there is an unused blank tab opened in the beginning which can be used instead of a newPage
  const page = await context.newPage();

  await page.goto(process.env.DAPP_URL);

  //TODO: Specific for Rootstock Collective
  await page.getByText('Connect wallet').click();

  // Accepting terms and conditions
  const agreeTerms = page.getByText('I Agree');
  if (await agreeTerms.isVisible()) {
    await agreeTerms.click();
  }

  await metamask.connectToDapp(['Account 1'])

});
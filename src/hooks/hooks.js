import { BeforeAll, AfterAll, Before, After } from '@cucumber/cucumber';
import metamaskConfig from './fixtures.js';

BeforeAll({timeout: 60 * 1000}, async function () {
    console.log("Loading metamask extension");
    await metamaskConfig();

    // Reusing initial blank tab for our dApp
    global.page = await global.context.pages()[0];
    const mainWindow = global.page;
    await mainWindow.bringToFront();
    
    //Dapp launch
    await page.goto(global.BASE_URL);
});

// Before(async function () {
// });

After(async function () {
    console.log("Close dApp page");  
    await global.page.close();
});

AfterAll(async function () {
    console.log("Close browser & context");
    await global.context.close();
});
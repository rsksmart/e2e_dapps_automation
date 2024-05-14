import { BeforeAll, AfterAll, Before, After } from "@cucumber/cucumber";
import metamaskConfig from "./fixtures.js"

BeforeAll({timeout: 60 * 1000}, async function () {
    console.log("Loading metamask extension");
    await metamaskConfig();
});

Before(async function () {
    console.log("Selecting page context for dApp interaction");
    // Loading our dApp in a new tab
    // global.page = await global.context.newPage();
    
    // Reusing initial blank tab for our dApp
    global.page = await global.context.pages()[0];
    const mainWindow = global.page;
    await mainWindow.bringToFront();
});

After(async function () {
    console.log("Close dApp page");  
    await global.page.close();
});

AfterAll(async function () {
    console.log("Close browser & context");
    await global.context.close();
});
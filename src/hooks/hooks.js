import { BeforeAll, AfterAll, Before, After } from "@cucumber/cucumber";
import metamaskConfig from "./fixtures.js"

BeforeAll({timeout: 60 * 1000}, async function () {
    console.log("Loading metamask extension");
    await metamaskConfig();
});

Before(async function () {
    console.log("Create new context page for dApp interaction");
    global.page = await global.context.newPage();
});

After(async function () {
    console.log("Close dApp page");  
    await global.page.close();
});

AfterAll(async function () {
    console.log("Close browser & context");
    await global.context.close();
});
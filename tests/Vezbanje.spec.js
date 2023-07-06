const { test,expect } = require("@playwright/test");

test("Prvi test", async ({ browser }) => {
  const mojPretrazivac = await browser.newContext();
  const stranica = await mojPretrazivac.newPage();

  await stranica.goto("https://google.com");
});

test.only("Drugi test", async ({ page }) => {
  await page.goto("https://google.com");
  await expect(page).toHaveTitle('Google');

});


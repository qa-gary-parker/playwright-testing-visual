// example.spec.js
const { test, expect } = require('@playwright/test');

test('visual - view', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await expect(page).toHaveScreenshot({ maxDiffPixelRatio: 0.2 });
});

test('visual - element', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/'); 
  const headerLogo = page.locator('#entry_217821 > figure > a > img')
  await expect(headerLogo).toHaveScreenshot({ maxDiffPixelRatio: 0.2 })
});

test('visual - mask', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await expect(page).toHaveScreenshot({ mask: [page.locator('.carousel-inner')], maxDiffPixelRatio: 0.2 } )
});

test('visual - full page', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await expect(page).toHaveScreenshot
    ({ fullPage: true, animations: "disabled", maxDiffPixelRatio: 0.2 });
});
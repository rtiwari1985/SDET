
const { test, expect } = require('@playwright/test');

const keywords = [
  'locators',
  'assertions',
  'auto-waiting',
  'retries',
  'parallelism',
  'headless', 
  'interaction',
  'screenshots',
  'videos',
  'tracing',
  'network',
];

test('Validate multiple search keywords', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  for (const keyword of keywords) {
    const searchButton = page.getByRole('button', {
      name: /search/i
    });

    await searchButton.click();

    const searchBox = page.getByPlaceholder(/search/i);

    await searchBox.fill(keyword);

    // await page.waitForTimeout(5000);
    await expect(searchBox).toHaveValue(keyword);

    // await page.waitForTimeout(2000);
    console.log('PASS: Keyword entered:', keyword);
    // await page.waitForTimeout(5000);
    

    await page.keyboard.press('Escape');
  }
});

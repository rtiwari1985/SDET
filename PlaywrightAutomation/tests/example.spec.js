const { test, expect } = require('@playwright/test');

test('Verify Playwright homepage', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);

  await expect(
    page.getByRole('link', { name: 'Get started' })
  ).toBeVisible();
});
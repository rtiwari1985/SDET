
const { test, expect } = require('@playwright/test');

test('Enter text into a textbox', async ({ page }) => {
  await page.goto(
    'https://www.selenium.dev/selenium/web/web-form.html'
  );

  const textbox = page.locator('input[name="my-text"]');
  await textbox.fill('Rajiv - Playwright Testing');
  await page.waitForTimeout(3000);
  const password = page.locator('input[name="my-password"]');
  await password.fill('Rajiv@2428');
  await page.waitForTimeout(3000);
  const textarea = page.locator('textarea[name="my-textarea"]');
  await textarea.fill('Rajiv - Playwright Testing');
  await page.waitForTimeout(3000);
  await expect(textbox).toHaveValue(
    'Rajiv - Playwright Testing'
  );
  await expect(password).toHaveValue('Rajiv@2428');
  await expect(textarea).toHaveValue('Rajiv - Playwright Testing');

  console.log('Textbox validation passed');
});

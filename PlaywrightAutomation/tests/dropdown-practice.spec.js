
const { test, expect } = require('@playwright/test');

const options = [
  { label: 'One', value: '1' },
  { label: 'Two', value: '2' },
  { label: 'Three', value: '3' }
];

test('Validate dropdown options', async ({ page }) => {
  await page.goto(
    'https://www.selenium.dev/selenium/web/web-form.html'
  );

  const dropdown = page.locator('#my-select');

  for (const option of options) {
    await dropdown.selectOption({ label: option.label });

    await expect(dropdown).toHaveValue(option.value);

    console.log('PASS: Selected', option.label);
  }
});

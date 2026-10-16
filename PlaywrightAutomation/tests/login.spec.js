
const { test, expect } = require('@playwright/test');

const loginData = [
  {
    username: 'student',
    password: 'Password123',
    scenario: 'validLogin'
  },
  {
    username: 'wronguser',
    password: 'Password123',
    scenario: 'invalidUsername'
  },
  {
    username: 'student',
    password: 'WrongPassword',
    scenario: 'invalidPassword'
  },
  {
    username: '',
    password: '',
    scenario: 'blankFields'
  },
  {
    username: 'student',
    password: '',
    scenario: 'blankPassword'
  }
];

test('Validate multiple login scenarios', async ({ page }) => {

  for (const data of loginData) {

    console.log('Running scenario:', data.scenario);

    await page.goto(
      'https://practicetestautomation.com/practice-test-login/'
    );

    await page.getByLabel('Username').fill(data.username);
    await page.getByLabel('Password').fill(data.password);

    await page.getByRole('button', { name: 'Submit' }).click();

    if (data.scenario === 'validLogin') {

      await expect(page).toHaveURL(/logged-in-successfully/);
      console.log('PASS: Login successful');

    } else if (data.scenario === 'invalidUsername') {

      await expect(page.locator('#error'))
        .toContainText('Your username is invalid!');
      console.log('PASS: Invalid username validated');

    } else if (data.scenario === 'invalidPassword') {

      await expect(page.locator('#error'))
        .toContainText('Your password is invalid!');
      console.log('PASS: Invalid password validated');

    } else if (data.scenario === 'blankFields') {

      await expect(page.locator('#error')).toBeVisible();
      console.log('PASS: Blank fields handled');

    } else if (data.scenario === 'blankPassword') {

      await expect(page.locator('#error')).toBeVisible();
      console.log('PASS: Blank password handled');

    } else {

      console.log('No matching scenario found');
    }
  }
});

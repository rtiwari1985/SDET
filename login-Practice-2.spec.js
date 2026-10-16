
const { test, expect } = require('@playwright/test');

const scenarios = [
  {
    name: 'Valid login',
    username: 'student',
    password: 'Password123',
    validate: async (page) => {
      await expect(page).toHaveURL(/logged-in-successfully/);
      await expect(
        page.getByText(/successfully logged in/i)
      ).toBeVisible();
    }
  },
  {
    name: 'Invalid username',
    username: 'wronguser',
    password: 'Password123',
    validate: async (page) => {
      await expect(page.locator('#error'))
        .toContainText('Your username is invalid!');
    }
  },
  {
    name: 'Invalid password',
    username: 'student',
    password: 'WrongPassword',
    validate: async (page) => {
      await expect(page.locator('#error'))
        .toContainText('Your password is invalid!');
    }
  },
  {
    name: 'Blank username',
    username: '',
    password: 'Password123',
    validate: async (page) => {
      await expect(page.locator('#error')).toBeVisible();
    }
  },
  {
    name: 'Blank password',
    username: 'student',
    password: '',
    validate: async (page) => {
      await expect(page.locator('#error')).toBeVisible();
    }
  }
];

test('Execute multiple login scenarios', async ({ page }) => {
  for (const scenario of scenarios) {
    console.log('Starting:', scenario.name);

    await page.goto(
      'https://practicetestautomation.com/practice-test-login/'
    );

    await page.getByLabel('Username').fill(scenario.username);
    await page.getByLabel('Password').fill(scenario.password);

    await page.getByRole('button', { name: 'Submit' }).click();

    await scenario.validate(page);

    console.log('PASS:', scenario.name);
  }
});

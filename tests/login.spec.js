const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('user can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('testuser', 'password123');

  await expect(page).toHaveURL(/dashboard/);
});
// fixtures/authFixture.js
const base = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

exports.test = base.test.extend({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
    
    await use(page);
  },
});
exports.expect = base.expect;
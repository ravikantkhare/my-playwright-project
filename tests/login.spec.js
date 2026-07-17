const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");

test("User should login successfully", async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.login(
        "standard_user",
        "secret_sauce"
    );

    await expect(page).toHaveURL(/inventory/);

    await expect(page.locator(".title")).toHaveText("Products");
});
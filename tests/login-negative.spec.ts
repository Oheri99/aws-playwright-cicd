import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { environment } from '../utils/env';

test.describe('Swag Labs Login validations', () => {
  test('should show an error for locked out user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('locked_out_user', environment.password);

    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface');
  });
});

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { environment } from '../utils/env';

test.describe('Swag Labs Login', () => {

  test('should login successfully with valid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
      environment.username,
      environment.password
    );

    await expect(page).toHaveURL(/inventory\.html/);

    await expect(loginPage.productsTitle).toBeVisible();
  });

});
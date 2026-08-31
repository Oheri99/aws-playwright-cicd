import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { environment } from '../utils/env';

test.describe('Inventory flow', () => {
  test('user can view products and add an item to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(environment.username, environment.password);

    await inventoryPage.expectLoaded();

    const productCount = await inventoryPage.productCards.count();
    expect(productCount).toBeGreaterThan(0);

    await inventoryPage.addFirstItemToCart();
    await expect(inventoryPage.shoppingCartBadge).toHaveText('1');
  });
});

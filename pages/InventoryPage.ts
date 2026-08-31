import { type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly productCards: Locator;
  readonly shoppingCartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByText('Products');
    this.productCards = page.locator('.inventory_item');
    this.shoppingCartBadge = page.locator('.shopping_cart_badge');
  }

  async expectLoaded() {
    await this.pageTitle.waitFor({ state: 'visible' });
    await this.productCards.first().waitFor({ state: 'visible' });
  }

  async addFirstItemToCart() {
    await this.page.locator('.inventory_item button').first().click();
  }
}

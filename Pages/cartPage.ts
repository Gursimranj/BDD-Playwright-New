import { Page, Locator, expect } from '@playwright/test';


 // Page Object for the Cart page, Verifying products in the cart, Navigating to checkout


export class CartPage {
  readonly page: Page;
  readonly cartItemNames: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Product names inside cart items
    this.cartItemNames = page.locator('.cart_item .inventory_item_name');

    // Checkout button on the cart page
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }


 // waits until at least one cart item is visible
  
  async waitForCartLoaded(): Promise<void> {
    await expect(this.cartItemNames.first()).toBeVisible();
  }


  // Returns all product names currently present in the cart

  async getCartItemNames(): Promise<string[]> {
    await this.waitForCartLoaded();
    return this.cartItemNames.allTextContents();
  }

  
   // Clicks the Checkout button and waits for navigation to the first checkout step.
   
  async clickCheckout(): Promise<void> {
    await expect(this.checkoutButton).toBeVisible();
    await this.checkoutButton.click();
    await this.page.waitForURL('**/checkout-step-one.html');
  }
}
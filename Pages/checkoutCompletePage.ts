import { Page, Locator, expect } from '@playwright/test';


 //Page Object for Checkout Complete page, handles confirmation message 

export class CheckoutCompletePage {
  readonly page: Page;
  readonly completeHeader: Locator;
  readonly backHomeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.completeHeader = page.locator('.complete-header');
    this.backHomeButton = page.locator('[data-test="back-to-products"]');
  }

  // waits for the complete page to be visible.
   
  async waitForPageLoaded(): Promise<void> {
    await expect(this.completeHeader).toBeVisible();
  }

  //read main confirmation message
  async getCompletionMessage(): Promise<string | null> {
    await this.waitForPageLoaded();
    return this.completeHeader.textContent();
  }
}
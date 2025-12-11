import { Page, Locator, expect } from '@playwright/test';

// Page Object for Checkout Step Two page, Handles: order overview and finish button

 
export class CheckoutStepTwoPage {
  readonly page: Page;
  readonly summaryContainer: Locator;
  readonly finishButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Container that holds cart items summary
    this.summaryContainer = page.locator('#checkout_summary_container');

    // Finish button to complete the order
    this.finishButton = page.locator('[data-test="finish"]');
  }

  
   //Explicit wait for the order summary to be visible
   
  async waitForPageLoaded(): Promise<void> {
    await expect(this.summaryContainer).toBeVisible();
  }

  //Click Finish button and wait for the completion page
   
  async clickFinish(): Promise<void> {
    await this.waitForPageLoaded();
    await expect(this.finishButton).toBeVisible();
    await this.finishButton.click();
    await this.page.waitForURL('**/checkout-complete.html');
  }
}
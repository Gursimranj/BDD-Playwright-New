
 //Step Definitions for end-to-end checkout scenario.
 
import { expect } from '@playwright/test';
import { createBdd, test } from 'playwright-bdd';
import { InventoryPage } from '../pages/inventoryPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutStepOnePage } from '../pages/checkoutStepOnePage';
import { CheckoutStepTwoPage } from '../pages/checkoutStepTwoPage';
import { CheckoutCompletePage } from '../pages/checkoutCompletePage';
import checkoutData from '../data/checkoutData.json';

export { test };

const { When, Then } = createBdd(test);

//start checkout flow from the cart
When('I proceed to checkout from the cart', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await inventoryPage.goToCart();
  await cartPage.waitForCartLoaded();
  await cartPage.clickCheckout();
});

//fill in customer details on first checkout screen
When('I provide valid checkout information', async ({ page }) => {
  const checkoutStepOnePage = new CheckoutStepOnePage(page);

  const { firstName, lastName, postalCode } = checkoutData.customer;

  await checkoutStepOnePage.fillCheckoutInformation(
    firstName,
    lastName,
    postalCode
  );
  await checkoutStepOnePage.clickContinue();
});

//confirm order on summary screen
When('I finish the checkout', async ({ page }) => {
  const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
  await checkoutStepTwoPage.clickFinish();
});

//Validate final confirmation message
Then('I should see the order confirmation message', async ({ page }) => {
  const checkoutCompletePage = new CheckoutCompletePage(page);

  const completionText =
    (await checkoutCompletePage.getCompletionMessage())?.trim() ?? '';

  await expect(completionText).toBe(
    checkoutData.confirmation.message
  );
});

//confirm cart is empty after successful checkout
Then('the cart should be empty after checkout', async ({ page }) => {
  const checkoutCompletePage = new CheckoutCompletePage(page);
  const inventoryPage = new InventoryPage(page);

  // Navigate back to products
  await checkoutCompletePage.backHomeButton.click();
  await inventoryPage.waitForPageLoaded();

  // Cart badge should not be visible
  const isBadgeVisible = await inventoryPage.cartBadge.isVisible();
  await expect(isBadgeVisible).toBeFalsy();
});
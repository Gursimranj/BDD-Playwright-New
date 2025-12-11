import { expect } from '@playwright/test';
import { createBdd, test } from 'playwright-bdd';
import { InventoryPage } from '../pages/inventoryPage';
import { CartPage } from '../pages/cartPage';
import productsData from '../data/productData.json';

export { test };

const { Given, When, Then } = createBdd(test);

// have a few products already in cart
//Used in cart.feature and checkout.feature Background
 
Given('I have added multiple products to the cart', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  for (const product of productsData.productsToAdd) {
    await inventoryPage.addProductToCart(product.addToCartSelector);
  }

  const expectedCount = productsData.productsToAdd.length;
  const actualCount = await inventoryPage.getCartBadgeCount();
  await expect(actualCount).toBe(expectedCount);
});

//add multiple products to cart in current scenario
When('I add multiple products to the cart', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  for (const product of productsData.productsToAdd) {
    await inventoryPage.addProductToCart(product.addToCartSelector);
  }
});

//check that cart shows same products as added
Then('I should see the same products in the cart', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await inventoryPage.goToCart();

  const expectedProductNames = productsData.productsToAdd.map(
    (p) => p.name
  );
  const actualProductNames = await cartPage.getCartItemNames();

  await expect(actualProductNames).toEqual(expectedProductNames);
});

//Verify that cart count matches no of products we added
Then(
  'the cart badge should show the correct item count',
  async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const expectedCount = productsData.productsToAdd.length;
    const actualCount = await inventoryPage.getCartBadgeCount();
    await expect(actualCount).toBe(expectedCount);
  }
);
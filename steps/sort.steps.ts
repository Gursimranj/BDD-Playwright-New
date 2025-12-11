import { expect } from '@playwright/test';
import { createBdd, test } from 'playwright-bdd';
import { InventoryPage } from '../pages/inventoryPage';
import sortData from '../data/sortData.json';

export { test };

const { When, Then } = createBdd(test);


 //When I sort products by name A to Z
 
When('I sort products by name A to Z', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.waitForInventoryLoaded();
  const sortValue = sortData.sortOptions.nameAToZ.value; // "az"
  await inventoryPage.selectSortOptionByValue(sortValue);
});


 //Then I should see products ordered alphabetically

Then('I should see products ordered alphabetically', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  const productNames = await inventoryPage.getProductNames();
  const sortedNames = [...productNames].sort((a, b) =>
    a.localeCompare(b)
  );

  await expect(productNames).toEqual(sortedNames);
});


 //When I sort products by price low to high
 
When('I sort products by price low to high', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.waitForInventoryLoaded();

  const sortValue = sortData.sortOptions.priceLowToHigh.value; 
  await inventoryPage.selectSortOptionByValue(sortValue);
});


//Then I should see products ordered from lowest to highest price

Then(
  'I should see products ordered from lowest to highest price',
  async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const prices = await inventoryPage.getProductPrices();
    const sorted = [...prices].sort((a, b) => a - b);
    await expect(prices).toEqual(sorted);
  }
);
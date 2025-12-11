import { Page, Locator, expect } from '@playwright/test';


 // Page Object for the Inventory (Products) page.
 
export class InventoryPage {
  readonly page: Page;

  readonly cartIcon: Locator;
  readonly cartBadge: Locator;
  readonly inventoryItemNames: Locator;
  readonly inventoryItemPrices: Locator;
  readonly sortDropdown: Locator;

  constructor(page: Page) {
    this.page = page;

    // Cart icon in header
    this.cartIcon = page.locator('[data-test="shopping-cart-link"]');

    // Cart badge with item count
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');

    // Product titles
    this.inventoryItemNames = page.locator('.inventory_item_name');

    // Product prices
    this.inventoryItemPrices = page.locator('.inventory_item_price');

    // Sort dropdown
    this.sortDropdown = page.locator('.product_sort_container');
  }

 //confirm we are on inventory page and atleast one item is visible
  async waitForInventoryLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/.*inventory\.html/);
    await expect(this.inventoryItemNames.first()).toBeVisible();
  }

  //Adds a single product to the cart using its add-to-cart selector from json data file
  
  async addProductToCart(addToCartSelector: string): Promise<void> {
    await this.page.locator(addToCartSelector).click();
  }

  
   //Clicks the cart icon and waits for Cart page to load.
   
  async goToCart(): Promise<void> {
    await this.cartIcon.click();
    await expect(this.page).toHaveURL(/.*cart\.html/);
  }

 // returns value of the cart badge, if nothing found return 0
   
  async getCartBadgeCount(): Promise<number> {
    if (await this.cartBadge.isVisible()) {
      const text = await this.cartBadge.textContent();
      return text ? Number(text) : 0;
    }
    return 0;
  }


//Selects a sort option (az, za, lohi, hilo).
  
  async selectSortOptionByValue(value: string): Promise<void> {
    console.log("we are here")
    await this.sortDropdown.selectOption(value);
  }

  
   //Returns all product names in the current visible order
   
  async getProductNames(): Promise<string[]> {
    await this.waitForInventoryLoaded();
    return this.inventoryItemNames.allTextContents();
  }

  
  //get all product prices in the current visible order as numbers
   
  async getProductPrices(): Promise<number[]> {
    await this.waitForInventoryLoaded();
    const priceTexts = await this.inventoryItemPrices.allTextContents();
    return priceTexts.map((text) =>
      Number(text.replace('$', '').trim())
    );
  }
    async waitForPageLoaded() {
    // URL should match /inventory page url
    await expect(this.page).toHaveURL(/inventory\.html/);
  }

  
}
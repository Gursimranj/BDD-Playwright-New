// Generated from: features/cart.feature
import { test } from "playwright-bdd";

test.describe('Add multiple products to cart', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am logged in as a valid user', null, { page }); 
  });
  
  test('Add multiple products to the cart and verify cart contents', { tag: ['@cart'] }, async ({ When, Then, And, page }) => { 
    await When('I add multiple products to the cart', null, { page }); 
    await Then('I should see the same products in the cart', null, { page }); 
    await And('the cart badge should show the correct item count', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/cart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":10,"tags":["@cart"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am logged in as a valid user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I add multiple products to the cart","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I should see the same products in the cart","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And the cart badge should show the correct item count","stepMatchArguments":[]}]},
]; // bdd-data-end
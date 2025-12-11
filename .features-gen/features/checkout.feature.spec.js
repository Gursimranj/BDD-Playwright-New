// Generated from: features/checkout.feature
import { test } from "playwright-bdd";

test.describe('Complete end-to-end order', () => {

  test.beforeEach('Background', async ({ Given, And, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am logged in as a valid user', null, { page }); 
    await And('I have added multiple products to the cart', null, { page }); 
  });
  
  test('Successfully complete checkout for multiple products', { tag: ['@e2e_checkout'] }, async ({ When, Then, And, page }) => { 
    await When('I proceed to checkout from the cart', null, { page }); 
    await And('I provide valid checkout information', null, { page }); 
    await And('I finish the checkout', null, { page }); 
    await Then('I should see the order confirmation message', null, { page }); 
    await And('the cart should be empty after checkout', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/checkout.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":11,"tags":["@e2e_checkout"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am logged in as a valid user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I have added multiple products to the cart","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I proceed to checkout from the cart","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And I provide valid checkout information","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And I finish the checkout","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see the order confirmation message","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And the cart should be empty after checkout","stepMatchArguments":[]}]},
]; // bdd-data-end
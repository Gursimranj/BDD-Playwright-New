// Generated from: features/sort.feature
import { test } from "playwright-bdd";

test.describe('Sort products on the inventory page', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am logged in as a valid user', null, { page }); 
  });
  
  test('Sort products by name A to Z', { tag: ['@sort_name'] }, async ({ When, Then, page }) => { 
    await When('I sort products by name A to Z', null, { page }); 
    await Then('I should see products ordered alphabetically', null, { page }); 
  });

  test('Sort products by price low to high', { tag: ['@sort_price'] }, async ({ When, Then, page }) => { 
    await When('I sort products by price low to high', null, { page }); 
    await Then('I should see products ordered from lowest to highest price', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/sort.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":10,"tags":["@sort_name"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am logged in as a valid user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I sort products by name A to Z","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I should see products ordered alphabetically","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":15,"tags":["@sort_price"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am logged in as a valid user","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I sort products by price low to high","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then I should see products ordered from lowest to highest price","stepMatchArguments":[]}]},
]; // bdd-data-end
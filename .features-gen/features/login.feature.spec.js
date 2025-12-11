// Generated from: features/login.feature
import { test } from "playwright-bdd";

test.describe('Login Functionality for Swag Labs', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the SauceDemo login page', null, { page }); 
  });
  
  test('Successful login with valid credentials', { tag: ['@login'] }, async ({ When, Then, And, page }) => { 
    await When('I enter valid username and valid password', null, { page }); 
    await And('I click the Login button', null, { page }); 
    await Then('I should be redirected to the Products page', null, { page }); 
    await And('I should see the product inventory displayed', null, { page }); 
  });

  test('Unsuccessful login with invalid credentials', async ({ When, Then, And, page }) => { 
    await When('I enter an invalid username and a valid password', null, { page }); 
    await And('I click the Login button', null, { page }); 
    await Then('I should see a login error message saying "Epic sadface: Username and password do not match any user in this service"', null, { page }); 
    await And('I should remain on the login page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I enter valid username and valid password","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And I click the Login button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the Products page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"And I should see the product inventory displayed","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the SauceDemo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I enter an invalid username and a valid password","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And I click the Login button","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then I should see a login error message saying \"Epic sadface: Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":42,"value":"\"Epic sadface: Username and password do not match any user in this service\"","children":[{"start":43,"value":"Epic sadface: Username and password do not match any user in this service","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"And I should remain on the login page","stepMatchArguments":[]}]},
]; // bdd-data-end
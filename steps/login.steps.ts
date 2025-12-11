import { expect } from '@playwright/test';
import { createBdd, test } from 'playwright-bdd';
import { LoginPage } from '../Pages/loginPage'
import loginData from '../data/loginData.json';
import playwrightConfig from '../playwright.config';

const { Given, When, Then } = createBdd();

//login as valid user (resued in other features)
 Given('I am logged in as a valid user', async ({ page }) => {
   const loginPage = new LoginPage(page);

   await loginPage.goto();
   await loginPage.login(
     loginData.validUser.username,
     loginData.validUser.password
    
   );
   await loginPage.loginButton.click();
 });



//Opens the saucedemo login page
  Given('I am on the SauceDemo login page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();// Just opens login page
  });

  //Enters a valid username and password
  When('I enter valid username and valid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    //Fill username password from test data
    await loginPage.login(loginData.validUser.username, loginData.validUser.password
    );


  });

  //click login button
  When('I click the Login button', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginButton.click();
  });

  //check that we landed on products page
  Then('I should be redirected to the Products page', async ({ page }) => {
    await expect(page).toHaveURL(loginData.inventoryUrl.url);
  });

  //to check if atleast one product is visible
  Then('I should see the product inventory displayed', async ({ page }) => {
    await expect(page.locator('.inventory_item').first()).toBeVisible();
  });

  //type an invalid username with valid password
  When('I enter an invalid username and a valid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.usernameInput.fill(loginData.invalidUser.username);
    await loginPage.passwordInput.fill(loginData.invalidUser.password);
  });

  //expected error message should appear
  Then('I should see a login error message saying {string}', async ({ page }, expectedMessage : string) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginButton.click();
    await expect(loginPage.errorMessage).toHaveText(loginData.invalidUser.message);
  });

  //user should remain on the login page
  Then('I should remain on the login page', async ({ page }) => {
    //await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page).toHaveURL(playwrightConfig.use?.baseURL);

  });


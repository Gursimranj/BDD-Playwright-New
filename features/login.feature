Feature: Login Functionality for Swag Labs

  Background:
    Given I am on the SauceDemo login page

  @login
  Scenario: Successful login with valid credentials
    When I enter valid username and valid password
    And I click the Login button
    Then I should be redirected to the Products page
    And I should see the product inventory displayed

  Scenario: Unsuccessful login with invalid credentials
    When I enter an invalid username and a valid password
    And I click the Login button
    Then I should see a login error message saying "Epic sadface: Username and password do not match any user in this service"
    And I should remain on the login page

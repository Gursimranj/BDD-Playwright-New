Feature: Sort products on the inventory page
  As a logged-in Swag Labs user
  I want to sort products by name and price
  So that I can view items in a meaningful order

  Background:
    Given I am logged in as a valid user

  @sort_name
  Scenario: Sort products by name A to Z
    When I sort products by name A to Z
    Then I should see products ordered alphabetically

  @sort_price
  Scenario: Sort products by price low to high
    When I sort products by price low to high
    Then I should see products ordered from lowest to highest price
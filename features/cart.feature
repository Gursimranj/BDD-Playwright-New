Feature: Add multiple products to cart
  As a logged-in Swag Labs user
  I want to add multiple products to the cart
  So that I can verify they appear correctly in the cart

  Background:
    Given I am logged in as a valid user

  @cart
  Scenario: Add multiple products to the cart and verify cart contents
    When I add multiple products to the cart
    Then I should see the same products in the cart
    And the cart badge should show the correct item count
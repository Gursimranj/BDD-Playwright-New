Feature: Complete end-to-end order
  As a Swag Labs user
  I want to place an order for multiple products
  So that I can complete checkout successfully

  Background:
    Given I am logged in as a valid user
    And I have added multiple products to the cart

  @e2e_checkout
  Scenario: Successfully complete checkout for multiple products
    When I proceed to checkout from the cart
    And I provide valid checkout information
    And I finish the checkout
    Then I should see the order confirmation message
    And the cart should be empty after checkout
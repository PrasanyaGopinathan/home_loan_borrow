@calculator
Feature: Home Loan Calculator
  @checkEstimate @smoke
  Scenario: Calculate Borrowing Estimate
    Given I navigate to home loan calculator page of the bank
    And Your details, Your earnings and Your Expenses section fields are filled as 'validUserData1'
    When Work out how much I could borrow button is clicked
    Then borrowing estimate is displayed correctly
  @checkClear
  Scenario: Clear form on Start Over
    Given I navigate to home loan calculator page of the bank
    And Your details, Your earnings and Your Expenses section fields are filled as 'validUserData2'
    And  Work out how much I could borrow button is clicked
    When Start over button is clicked
    Then form should be cleared
  @checkError @smoke
  Scenario: Validate error message upon invalid input
    Given I navigate to home loan calculator page of the bank
    And Your details, Your earnings and Your Expenses section fields are filled as 'invalidUserData1'
    When Work out how much I could borrow button is clicked
    Then error message should be displayed



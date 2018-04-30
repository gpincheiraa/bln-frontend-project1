Feature: Home
  I want to open Home page and interact with the table data

  Scenario: Open Home page
    Given I open Home page
    Then I see the title based on the title and author information from package.json
  
  Scenario: Create table header with mandatory column names
    Given I open Home page
    Then I see Currency, 15m, Last, Sell and Buy column names on the table
  
  Scenario: Create the table body with the data requested
    Given I open Home page
    Then I see the data response rendered as row on the table
  
  Scenario: Create the currency selector with the data requested
    Given I open Home page
    Then I see the currency selector with the currencies given in the data requested
  
  Scenario: Option selected on currency selector should add class to the right table row
    Given I open Home page
    When select the "AUD" currency in the currency selector
    Then I see the right row "AUD" with the class in the table
    When select the "USD" currency in the currency selector
    Then I see the right row "USD" with the class in the table 
    When select the "TODOS" currency in the currency selector
    Then I see that the class is not applied to neither row 
  
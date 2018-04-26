Feature: Home
  I want to open Home page and interact with the table data

  Scenario: Open Home page
    Given I open Home page
    Then I see "Proyecto 1" in the title
  
  Scenario: Create table header with mandatory column names
    Given I open Home page
    Then I see Currency, 15m, Last, Sell and Buy column names on the table
  
  Scenario: Create the table body with the data requested
    Given I open Home page
    Then I see the data response rendered as row on the table
  
  Scenario: Create the currency selector with the data requested
    Given I open Home page
    Then I see the currency selector with the currencies given in the data requested
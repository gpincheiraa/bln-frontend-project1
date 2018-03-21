Feature: Home
  I want to open Home page and interact with the table data

  Scenario: Open Home page
    Given I open Home page
    Then I see "Proyecto 1" in the title
  
  Scenario: Create table with mandatory column names
    Given I open Home page
    Then I see Currency, 15m, Last, Sell and Buy column names on the table
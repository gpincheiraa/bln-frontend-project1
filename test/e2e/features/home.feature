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
  
  Scenario Outline: Option selected on currency selector should add class to the right table row
    Given I open Home page on "<viewport>"
    When select the "<currency>" in the currency selector
    Then I see the right row "<currency>" with the class in the table

    Examples:
    | viewport    | currency |
    | iphone-6    | AUD  |
    | macbook-15  | USD  |
    | macbook-15  | BRL  |

  Scenario: Option selected on currency selector "TODOS" should remove class 
    Given I open Home page
    When select the "TODOS" in the currency selector
    Then I see that the class is not applied to neither row 

  Scenario: Currency values are showed in the right language currency format
    Given I open Home page
    Then I see the data response currency values in the table within "CLP" format

  Scenario: BTC balance should update data each minute
    Given I open Home page
    Then I see BTC balance with a different value after a minute

  Scenario: Currency values should update data each minute
    Given I open Home page
    Then I see currency values with differents values after a minute
  
  Scenario: Table row related to currency selected keep selected when the table data is updated
    Given I open Home page
    When select the "USD" in the currency selector
    Then I see the right row "USD" with the class in the table after one minute
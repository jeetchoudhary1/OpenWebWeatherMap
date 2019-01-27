Feature: Search weather for invalid city on Open Weather Maps Home-page .

         As a user on city search Edit box
         I want to search for invalid city
         and Verify that website suggests city is "Not found".


    

    Background:
        Given I navigate to the Open Weather Maps home page

    Scenario Outline: Searching weather for an invalid city on the page
        When The page is loaded successfully
        And  I enter <searchItem> into the city search box
        And  I click on the search button
        Then It should display "Not found" instead of city
    
    Examples:
        |searchItem|
        |"XYZ"|

	
    

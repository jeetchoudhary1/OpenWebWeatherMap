Feature: Search weather for valid city on Open Weather Maps Home-page .

         As a user on city search Edit box
         I want to search for valid city
         and Verify that website successfully returns weather details for the city.


    

    Background:
        Given I navigate to the Open Weather Maps home page

    Scenario Outline: Searching weather for an invalid city on the page
        When The page is loaded successfully
        And  I enter <cityName> into the city search box
        And  I click on the search button
        Then It should display weather details for <cityName>,<Country>
    
    Examples:
        |cityName|Country|
        |"Mumbai"|"IN"   |

	
    

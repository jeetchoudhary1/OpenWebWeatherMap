
Feature: Verify Open Weather Maps web page for all the information mentioned below:-
         1. All Header and footer section Labels,Tabs.
	     2. OpenWeatherMap Logo and all important hyperlinks in NavBar,minNavBar.
         3. Temperature indicator.
         4. All the features related with current temperature shown for city like main,daily,hourly,chart,map.
         5. Page jumbotron and widget details as displayed.


         As a user when I Navigate to Open Weather Maps Home-page
         I want to see all the header and footer section labels
    

    Background:
        Given I navigate to the Open Weather Maps home page

    Scenario: Validating all the header and footer section labels on the page
      When The page is loaded successfully
      Then I should see all the header and footer section labels correctly displayed on the page
      And  I should see OpenWeatherMap Logo displayed on the page
      And  I should see Temperature indicator displayed on the page
      And  I should see jumbotron and widget details displayed on the page

    

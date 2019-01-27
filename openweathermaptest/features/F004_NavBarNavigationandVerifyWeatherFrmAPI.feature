Feature: Verify the Navigation for all hyperlinks in NavBar and minNavBar 
         on Open Weather Maps Home-pag,
         Searching weather for an valid city on the page and validating displayed data against API.
	 


         As a user I visit Open Weather Maps Home-page
         I want to see all the all hyperlinks in NavBar and minNavBar Navigate correctly.

    Background:
        Given I navigate to the Open Weather Maps home page


    Scenario Outline:  All hyperlinks in NavBar and minNavBar Navigate correctly.
        When The page is loaded successfully
        And  I click on <NavBarLink>
        Then It should display <ExpectedPage>

    Examples:
        |NavBarLink|ExpectedPage|
        |"signIn" |"verifySignInAccount"|
        |"signUp" |"verifySignUpAccount"|

  Scenario: Searching weather for an valid city on the page and validating displayed data against API
    When The page is loaded successfully
    And  I enter "Mumbai" into the city search box
    And  I click on the search button
    Then I should validate that "Mumbai","IN" is displayed on the page via API
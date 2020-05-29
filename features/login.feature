Feature: Login

    Scenario: Successful Login
        Given I am at the login page
        When I enter my email "zumbi@dospalmares.com" 
        And I enter my password "pwd123" 
        And I press the login button
        Then I can see my username "Quilombo" in the login area
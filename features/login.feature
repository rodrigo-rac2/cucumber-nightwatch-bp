Feature: Login

    Scenario: Successful Login
        Given I am at the login page
        When I login with my email "zumbi@dospalmares.com" and password "pwd123" 
        Then I can see my username "Quilombo" in the login area
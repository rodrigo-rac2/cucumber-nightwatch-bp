Feature: Google


  Scenario: Simple search
    Given The user navigates to Google.com main page
    When The user enters "Emerald Works" in the search input
    And The user clicks the search button
    Then The user can see the search results

import { client } from 'nightwatch-api'
import { Given, When, Then } from 'cucumber'

Given('The user navigates to Google.com main page', function () {
    let googleStartPage = client.page.GoogleStartPage()

    return googleStartPage.navigate()
});

When('The user enters {string} in the search input', function (searchString) {
    let googleStartPage = client.page.GoogleStartPage()

    this.searchText = searchString

    return googleStartPage.setSearchInput(searchString)
});

When('The user clicks the search button', function () {
    let googleStartPage = client.page.GoogleStartPage()

    return googleStartPage.clickSearchButton()
});

Then('The user can see the search results', function () {
    let googleResultsPage = client.page.GoogleResultsPage()

    return googleResultsPage.assertSearchContains(this.searchText)
});
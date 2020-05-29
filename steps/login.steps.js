const { client } = require('nightwatch-api')
const { Given, When, Then } = require('cucumber')

Given('I am at the login page', function () {
    let login = client.page.login()
    return login.load()
});

When('I login with my email {string} and password {string}', function (email, password) {
    let login = client.page.login()
    return login.with(email, password)
});

Then('I can see my username {string} in the login area', function (username) {
    let sidebar = client.page.sidebar()
    return sidebar.expectLoggedUser(username)
});
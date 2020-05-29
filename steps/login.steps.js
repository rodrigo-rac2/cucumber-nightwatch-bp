const { client } = require('nightwatch-api')
const { Given, When, Then } = require('cucumber')

Given('I am at the login page', function () {
    // this.loginPage = client.page.login()
    // this.loginPage.navigate()
    // this.loginPage.waitForElementVisible('@form', 5000)
   client.url('http://zombie-web:5000/login')
   return client.waitForElementVisible('.card-login', 3000)
});


When('I enter my email {string}', function (email) {
    // this.loginPage.setValue('@emailInput', email)
    return client.setValue('input[name=email]', email)
});

When('I enter my password {string}', function (password) {
    // this.loginPage.setValue('@passwdInput', password)
    return client.setValue('input[name=password]', password)
});

When('I press the login button', function () {
    // this.loginPage.click('@loginButton')
    return client.click('.login-button')
});

Then('I can see my username {string} in the login area', function (username) {
    client.waitForElementVisible('.user .info span', 10000) //good practice - wait for element to be validated
    return client.assert.containsText('.user .info span', username) //logged in and with the correct user
    //client.end();
});
var logUser = {
    expectLoggedUser: function (username) {
        return this
            .waitForElementVisible('@userInfo', 3000)
            .assert.containsText('@userInfo', username) //logged in and with the correct user
    }
}

module.exports = {
    commands: [logUser],
    elements: {
        userInfo: '.user .info span'
    }
}
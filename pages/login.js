var doLogin = {
    load: function () {
        return this
            .navigate()
            .waitForElementVisible('@form', 3000)
    },
    with: function (email, password) {
        return this
            .setValue('@emailInput', email)
            .setValue('@passwdInput', password)
            .click('@loginButton')
    }
}

var expects = {
    expectDangerAlert: function () {
        this
            .waitForElementVisible('@alertDanger', 3000) //good practice - wait for element to be validated
            .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos') //failure message    
    },
    expectInfoAlert: function (message) {
        this
            .waitForElementVisible('@alertInfo', 3000) //good practice - wait for element to be validated
            .assert.containsText('@alertInfo', message) //failure message    
    }
}


module.exports = {
    url: 'http://zombie-web:5000/login',
    commands: [doLogin, expects],
    elements: {
        form: '.card-login',
        emailInput: 'input[name=email]',
        passwdInput: 'input[id=passId]',
        loginButton: '.login-button',
        alertDanger: '.alert-danger',
        alertInfo: '.alert-info'
    }
}
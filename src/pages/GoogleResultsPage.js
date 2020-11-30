const actions = {
    setSearchInput: function (value) {
        return this
            .waitForElementVisible('@searchInput', 3000)
            .setValue('@searchInput', value)
    },
    clickSearchButton: function () {
        return this
            .waitForElementVisible('@searchButton', 3000)
            .click('@searchButton')
    }
};

const checks = {
    assertSearchContains: function (string) {
        return this
            .waitForElementVisible('@searchDiv', 3000)
            .assert.containsText('@searchDiv', string)
    }
};


const commands = [actions, checks];
const elements = {
    searchInput: 'input[name="q"]',
    searchButton: '.Tg7LZd',
    searchDiv: '#search'
};

export { commands, elements };
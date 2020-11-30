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

};
const url = "http://www.google.com";
const commands = [actions, checks];
const elements = {
        searchInput: 'input[name="q"]',
        searchButton: 'input[name="btnK"]'
    };

export { url, commands, elements };
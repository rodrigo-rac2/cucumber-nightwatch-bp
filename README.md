# QA Automation CucumberJs NightwatchJs project

# instructions on how to successfully set up your test project follow below

# run 'npm install' to install dependencies

npm install

# run 'npm tests' to run step definitions

npm tests

# place feature files inside folder 'features', and they follow Gherkin format

# place page-objects inside folder 'pages', and they follow nightwatch.js format

# place step-definitions (tests) inside folder 'steps', and they follow cucumber-js format
# make sure to import in your test files cucumber-js reserved words

const { Given, When, Then, And } = require('cucumber')

# also import the nightwatch-api

const { client } = require('nightwatch-api')

# naturally, refer to the 'browser' in your code as 'client' (you can do this in your pure nightwatch projects too!)
# a sample project is provided just for show

# DO NOT FORGET: modify 'launch_url' parameter in nightwatch.conf.js to the URL under test

            launch_url: 'http://zombie-web:5000', //change to your base URL

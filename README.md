# Cucumber-js Nightwatch.js Boilerplate with Google Chrome

Fork this project to initialize your own. Do not clone it!

Contact rodrigo@devsquad.email if you need help.

> This project is provided with a Google Search test 

> For a quick start, after forking the project, just run the following two commands:

`npm install`

`npm run test`

> For a more detailed understanding on this boilerplate, read the instructions below:
> i) Setting up the environment
1) Create a new project in CucumberStudio (http://www.cucumber.io)
2) import the .feature files (located in /src/features) in the project as new features 
3) Go to project settings, and copy the Project's Token ID
4) Add the project's token to the cucumber-js.conf
5) Create a test-run with the features you imported, and write down the test-run-id from its URL
- if the test-run-id URL is: https://studio.cucumber.io/projects/195226/test-runs/430591/overview)
- then, the test run ID is 430591

> ii) to send automated results to CucumberStudio on a cucumber/nightwatch project

1) in nightwatch.conf.js, configure the test and page objects paths

`src_folders: ['steps'], // to place tests, can be organized in subfolders`

`page_objects_path: './pages', // for the page objects`

2) install ruby 2.3+ and then hiptest-publisher

 `gem install hiptest-publisher`

3) update cucumber-js.conf and change the 'token' parameter to the token of your project (can be found in cucumber studio under project settings)

4) retrieve actionwords from cucumber

`hiptest-publisher -c cucumber-js.conf --actionwords-signature`

5) retrieve feature files from this project based in CucumberStudio - actionwords are not needed

`hiptest-publisher -c cucumber-js.conf --without=actionwords`

> feature files will be then placed in the 'features' directory

6) if you run your tests, cucumber will know output the signature of the methods that need to be generated (and placed in the 'src_folders' directory - for nightwatch's sake)

`npm install` -- make sure all is up-to-date (optional)

`npm run test`


> if you get the output below, it is coding time!
   ? Given The user navigates to Google.com main page
       Undefined. Implement with the following snippet:
         
         Given('The user navigates to Google.com main page', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

   ? When The user enters "Pink Floyd" in the search input
       Undefined. Implement with the following snippet:
         
         When('The user enters {string} in the search input', function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

   ? Then The user can see the search results
       Undefined. Implement with the following snippet:
         
        Then('The user can see the search results', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

> as you can see, the tests are hooked by its function name and the step declarations in teh feature files 

7) when you're ready, hook them up with the cucumber actionwords in your cucumber studio test run (replace test-run-id with the ID of the test run, available in the test run URL - https://studio.cucumber.io/projects/195226/test-runs/430591/overview)

`hiptest-publisher -c cucumber-js.conf --only=features,step_definitions --test-run-id=430591`

8) run your tests, they're now hooked up to your cucumber studio tests via the actionwords.yaml file inside the features directory

`npm run test`

9) make sure junit_output.xml is generated - if one of your tests have failed, you will need to run the following command manually before exporting the test results to cucumber studio

- windows:    `type report/cucumber_report.json | node_modules/.bin/cucumber-junit.cmd --features-as-suites > junit_output.xml`
- linux/mac:  `cat report/cucumber_report.json | node_modules/.bin/cucumber-junit.cmd --features-as-suites > junit_output.xml`

10) finally, send your tests to cucumber studio through the push parameter - remember that the test run id needs to match the one in the URL of the test run

`hiptest-publisher -c cucumber-js.conf --push=junit_output.xml --test-run-id=430591`


> ii) Additional instructions:

After the tests are run, the following files are generated:
`dist/report/cucumber_report.json` - cucumber-js report
`dist/report/cucumber_report.html` - user friendly report
`src/junit_output.xml` - CI/CD ready report

The following directories are present by default
`feature` - .feature files (cucumber-js default)
`pages` - page objects (Nightwatch format) - nightwatch.conf.js
`steps` - tests (javascript gherkin format) - nightwatch.conf.js


> This project uses chromedriver 84.0.0 to automate actions in Google Chrome. A compatible chrome version is required. In order to update this, edit the chromedriver version in package.json and re-run 'npm install'
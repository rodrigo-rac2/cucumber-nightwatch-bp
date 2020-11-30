import { readFileSync } from 'fs';
import { resolve as _resolve } from 'path';
import { random } from 'faker';
import path from 'path'
import { setDefaultTimeout, After, Before, AfterAll, BeforeAll } from 'cucumber';
import { client, createSession, closeSession, startWebDriver, stopWebDriver } from 'nightwatch-api';
import { generate } from 'cucumber-html-reporter';

setDefaultTimeout(60000);

// Hooks Cucumber.js
BeforeAll(async() => {
    const promises = []
    promises.push(startWebDriver({}));
    promises.push(createSession({}));
    await Promise.all(promises);
});

Before(() => {
    client.resizeWindow(1920,1080)
});

AfterAll(async() => {
    await closeSession();
    await stopWebDriver();
    setTimeout(() => { //TODO: only do this if headless option is not enabled
        generate({
            theme: 'bootstrap',
            jsonFile: 'report/cucumber_report.json',
            output: 'report/cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                'App Version': '2.0.1',
                'Test Environment': 'Local Test Env'
            }
        });
    }, 1500);
});

After(function() {
    let shotPath = path.resolve(`./screenshots/${random.uuid()}.png`);

    return new Promise((resolve, reject) => {
        client
            .saveScreenshot(shotPath)
            .then((res) => {
                resolve(res)
                return this.attach(readFileSync(shotPath), 'image/png');
            })
    })
});
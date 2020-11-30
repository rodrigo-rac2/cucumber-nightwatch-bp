import chromedriver from 'chromedriver';

const src_folders = [
    'steps'
] //tests is a folder in workspace which has the step definitions
const page_objects_path = [
    'pages'
] //page_objects folder where selectors are saved
const test_settings =
{
    default: {
        screenshots: {
            enabled: true,
            path: 'screenshots'
        },
        launch_url: 'http://www.google.com', //change to your project's base URL
        globals: {
            waitForConditionsTimeout: 20000
        },
        webdriver: {
            start_process: true,
            server_path: chromedriver.path,
            port: 9515
        },
        desiredCapabilities: {
            browserName: 'chrome',
            chromeOptions: {
                // This tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
                // w3c: false,
                // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
                args: [
                    '--no-sandbox',
                    '--ignore-certificate-errors',
                    '--allow-insecure-localhost',
                    //'--headless',
                    '--enable-features=NetworkService,NetworkServiceInProcess'
                ]
            }
        }
    }
}

export { src_folders, page_objects_path, test_settings };

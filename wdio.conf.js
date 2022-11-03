const { join } = require('path')
const allure = require('allure-commandline')

const drivers = {
    chrome: { version: '106.0.5249.61' }, // https://chromedriver.chromium.org/
    firefox: { version: '0.30.0' }, // https://github.com/mozilla/geckodriver/releases
    chromiumedge: { version: '103.0.1264.62' } // https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
}

/*var SERVER
var baseAppUrl = 'https://admin:admin@a1490790c1dev-store.occa.ocs.oraclecloud.com/en/';
if(process.env.SERVER === "tst")
{
    baseAppUrl = "https://admin:admin@a1490790c1tst-store.occa.ocs.oraclecloud.com/en/"
}
console.log(SERVER)*/

exports.config = {
    
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
    // on a remote machine).
    runner: 'local',
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    // Define specific Suites.
    suites: 
    {
        mat: [
            './test/specs/C1051.B2CupdatesHomeShippingAddress.test.js',
        ],

        e2e: [
            './test/specs/C1051.B2CupdatesHomeShippingAddress.test.js',
            './test/specs/C1052.B2CuserRegistersNewShippingAddress.test.js',
            './test/specs/C1053.B2CchoosesCanadaPostToPickUpTheOrder.test.js',
            './test/specs/C1054.B2BselectsShippingAddress.test.js',
            './test/specs/C1055.userChoosesAshippingMethod.test.js',
            './test/specs/C1056.B2BuserChoosesCanadaPostToPickUpTheOrder.test.js',
            './test/specs/C1057.B2CuserChoosesGiftCardAsPaymentMethod.test.js',
            './test/specs/C1058.B2CuserChoosesCreditCardAsPaymentMethod.test.js',
            './test/specs/C1060.B2BuserChoosesARaccountAsPaymentMethod.test.js',
            './test/specs/C1061.B2CuserChoosesSplitPaymentSavedGCandSavedCreditCard.test.js',
            './test/specs/C1062.UserAddsOrderDiscountCoupon.test.js',
            './test/specs/C1063.UserBuysAsGuest.test.js',
            './test/specs/C1064.CheckoutUserBuysGCandHardgoods.test.js',
            './test/specs/C1066.CheckoutUserLoggedChoosesBOPIS.test.js',
            './test/specs/C1067.UserGuestChoosesBOPIS.test.js',
            './test/specs/C1068.CustomerAdds2GCtoCart.test.js',
            './test/specs/C1069.UserEditsCartItemsNavigatingToCheckout.test.js',
            './test/specs/C1070.UserRemovesCartItemsNavigatingToCheckout.test.js',
            './test/specs/C1071.HomeUserCreatesNewAccount.test.test.js',
            './test/specs/C1072.HomeUserNavigateFooterLinks.test.js',
            './test/specs/C1073.HomeSelectPreferredStoreHeader.test.js',
            './test/specs/C1074.HomeSelectPreferredStoreFooter.test.js',
            './test/specs/C1075.MyProfileB2CuserCreateAnewAddress.test.js',
            './test/specs/C1076.MyProfileSaveAgiftCard.test.js',
            './test/specs/C1077.MyProfileSaveCreditCard.test.js',
            './test/specs/C1078.UserChoosesCategoryByMenu.test.js',
            './test/specs/C1079.UsersCompareProductsHomeAndPLP.test.js',
            './test/specs/C1169.PDPuserSelectChangeAstore.test.js',
            './test/specs/C1170.GiftCardCheckBalance.test.js',
            './test/specs/C1171.LoginResetPassword.test.js' 
        ]
    },

    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 1,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            'goog:chromeOptions': {

            //HEAD MODE (Default - Desktop)
            args: ['--incognito', '--disable-extensions', '--start-maximized'],
            excludeSwitches: ['enable-logging'],
            },

            //HEADLESS MODE
            //Alternative: '--headless', '--disable-gpu', '--window-size=1920,1080' (headless)
            /* args: ['--headless', '--no-sandbox', '--disable-gpu'],
            }, */

            //MOBILE HEAD (Default - Mobile)
            /* args: ['--incognito', '--disable-extensions', '--start-maximized'],
                excludeSwitches: ['enable-logging'],
                mobileEmulation: { deviceName: 'iPhone 4' }
            },
            acceptInsecureCerts: true,
            port: 4444 */
        },
        
        //FIREFOX
        /* {
            maxInstances: 1,
            browserName: 'firefox',
            'moz:firefoxOptions': 
            {
                args: ['--width=1920','--height=1080']
            },
        }, */
    ],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    //
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/sync, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/applitools-service': 'info'
    // },
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    //baseUrl: 'http://localhost',
    baseUrl: 'http://localhost',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 15000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 60000,
    //
    // Default request retries count
    connectionRetryCount: 5,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: 
        [
            /* ['chromedriver', 
                {
                    logFileName: 'wdio-chromedriver.log', // default
                    outputDir: 'driver-logs', // overwrites the config.outputDir
                    args: ['--silent'],
                    chromedriverCustomPath: 'C:/chromedriver.exe'
                }
            ], */ 
            ['performancetotal',
                // The options (with default values)
                {
                    disableAppendToExistingFile: false,
                    performanceResultsFileName: "performance-results",
                    dropResultsFromFailedTest: false,
                    performanceResultsDirectory: "performance-results"
                }
            ],
            ['selenium-standalone', {
                logPath: 'logs',
                installArgs: { drivers }, // drivers to install
                args: { drivers } // drivers to use
            }]
            /* ['selenium-standalone', 
                { drivers: 
                    { 
                        firefox: '0.30.0',
                        chrome: true,
                        chromiumedge: 'latest'
                    } 
                }
            ] */
        ],
    
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'jasmine',
    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter.html
    reporters:  ['spec', 'allure'],
                reporterOptions: {
                    allure: {
                        outputDir: 'allure-results',
                        disableWebdriverStepsReporting: true,
                        disableWebdriverScreenshotsReporting: false,
                        useCucumberStepReporter: false
                    }
                },

    
    //
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        // Jasmine default timeout
        defaultTimeoutInterval: 300000, 
        showColors: true, 
        includeStackTrace: true, 
        isVerbose: true,
        // Babel setup
        helpers: [require.resolve('@babel/register')]
    },

        // The Jasmine framework allows interception of each assertion in order to log the state of the application
        // or website depending on the result. For example, it is pretty handy to take a screenshot every time
        // an assertion fails.
        expectationResultHandler: function(passed, assertion) {
            // do something
    },
    
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    // before: function (capabilities, specs) {
    // },
        before: function() {
            require('@babel/register');
            browser.setTimeout({ implicit: 15000 });
            /* browser.setCookies({
                name: '_hjSessionUser_285756',
                value: 'eyJpZCI6ImZlY2I2OGY2LWY4ZDYtNWEzMS1iYjc1LWYyNzhiNjBlYjlmZSIsImNyZWF0ZWQiOjE2NTgwOTU1OTI0ODcsImV4aXN0aW5nIjp0cnVlfQ=='
            }); */ 
        },

    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    // beforeSuite: function (suite) {
    // },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    // beforeTest: function (test, context) {
    // },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function (test, context) {
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function (test, context, { error, result, duration, passed, retries }) {
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine).
     */
        /*afterTest: function(test, context, { error, result, duration, passed, retries }) {
            if (!passed) {
                browser.takeScreenshot();
            }
        },*/

        /*
        afterStep: function (test, context, { error, result, duration, passed, retries }) {
            if (error) {
              browser.takeScreenshot();
            }
          },
        */

    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    // afterSuite: function (suite) {
    // },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    // onComplete: function(exitCode, config, capabilities, results) {
    // },
        onComplete: function() {
            const reportError = new Error('Could not generate Allure report')
            const generation = allure(['generate', 'allure-results', '--clean'])
            return new Promise((resolve, reject) => {
                const generationTimeout = setTimeout(
                    () => reject(reportError),
                    5000)

                generation.on('exit', function(exitCode) {
                    clearTimeout(generationTimeout)

                    if (exitCode !== 0) {
                        return reject(reportError)
                    }

                    console.log('Allure report successfully generated')
                    resolve()
                })
            })
        }

    /*
        onComplete: function() {
            const reportError = new Error('Could not generate Allure report')
            const generation = allure(['generate', 'allure-results', '--clean'])
            return new Promise((resolve, reject) => {
                const generationTimeout = setTimeout(() => reject(reportError), 10000);
                generation.on('exit', function(exitCode) {
                    clearTimeout(generationTimeout);

                    if (exitCode !== 0) {
                        return reject(reportError);
                    }

                    console.log('Allure report successfully generated');
                    resolve();
                })
            })
        },
    */

    /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
    //onReload: function(oldSessionId, newSessionId) {
    //}
}

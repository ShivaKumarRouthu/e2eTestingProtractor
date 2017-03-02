// An example configuration file

var HTMLReport = require('protractor-html-reporter');
var fs = require('fs-extra');
var jasmineReporters = require('jasmine-reporters');


exports.config = {


    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',

    // Protractor can test directly against Chrome and Firefox without using a Selenium Server. To use this, in your config file set 
    // The advantage of directly connecting to browser drivers is that your test scripts may start up and run faster.
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    // Browser Support: https://github.com/angular/protractor/blob/master/docs/browser-support.md
    // capabilities: https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {}
    },

    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['./pages/amexHome_spec.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    },
    plugins: [{
        package: 'jasmine2-protractor-utils',
        disableHTMLReport: true,
        disableScreenshot: false,
        screenshotPath: './report/screenshots',
        screenshotOnExpectFailure: false,
        screenshotOnSpecFailure: true,
        clearFoldersBeforeTest: true
    }],
    onPrepare: function () {
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'report/',
            filePrefix: 'index'
        }));

        fs.emptyDir('./report/screenshots/', function (err) {
            if (err) console.log(err);
        });

        jasmine.getEnv().addReporter({
            specDone: function (result) {
                browser.getCapabilities().then(function (caps) {
                    var browserName = caps.get('browserName');
                    browser.takeScreenshot().then(function (png) {
                        var stream = fs.createWriteStream('report/screenshots/' + browserName + '-' + result.fullName + '.png');
                        stream.write(new Buffer(png, 'base64'));
                        stream.end();
                    });
                });
            }
        });
    },
    onComplete: function () {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();

        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('browserVersion');

            reportConfig = {
                reportTitle: "Test Report File",
                outputPath: './report',
                screenshotsPath: './report/screenshots/',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: false
            };
            new HTMLReport().from('./report/index.xml', reportConfig);
        });
    }

};
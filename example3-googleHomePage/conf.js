// An example configuration file
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
        'chromeOptions':{}
    },

    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['./pages/googleHome_spec.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    }
};
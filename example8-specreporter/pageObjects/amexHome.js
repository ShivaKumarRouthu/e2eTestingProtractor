var AMEXHOME = function (isNonAngularFlag) {
var welcomeMessage = element(by.id('welcome_title'));
var loginControl = element(by.id('Login1_UserName'));
var passwordControl= element(by.id('Login1_Password'));
var loginButton = element(by.id('Login1_LoginButton'));  

    browser.ignoreSynchronization = isNonAngularFlag;

    this.get = function(url){
        url = url || 'default home url';
        browser.get(url);
    }

    this.getWelcomeMessage = function (cb) {
        cb(welcomeMessage.getText());
    }

    this.enterUserName = function(userName) {
        loginControl.sendKeys(userName);
    }

    this.enterPassword = function(password) {
        passwordControl.sendKeys(password);
    }

    this.login = function(cb) {
        loginButton.click();
        browser.sleep(3000);
        cb();
    }

};

module.exports = AMEXHOME;
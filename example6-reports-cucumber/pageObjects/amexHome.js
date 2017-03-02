var GoogleHome = function (isNonAngularFlag) {
var bannerText = element(by.id('hplogo'));
var countyText = element(by.id('iNav_DDA_countryName'));
var yourAccountsText = element(by.css("#L2_YOURACCOUNT a"));
    browser.ignoreSynchronization = isNonAngularFlag;

    this.get = function(url){
        url = url || 'default home url';
        browser.get(url);
    }

    this.getTitle = function (cb) {
        cb(browser.getTitle());
    }

    this.getCountry = function(cb){
        cb(countyText.getText());
    }

    this.getYourAccountText = function(cb){
        cb(yourAccountsText.getText());
    }

};

module.exports = GoogleHome;
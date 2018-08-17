var AMEXHOME = function (isNonAngularFlag) {
var heroHeader = element(by.css('.news-header'));

    browser.ignoreSynchronization = isNonAngularFlag;

    this.get = function(url){
        url = url || 'default home url';
        browser.get(url);
    }

    this.getHeroHeader = function (cb) {
        cb(heroHeader.getText());
    }

};

module.exports = AMEXHOME;
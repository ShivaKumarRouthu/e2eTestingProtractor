var NavigationMenu = function (isNonAngularFlag) {
    var logoHeader = element(by.id('LogoHeader'));
    var contactNavLink = element(by.css('.navbar-nav li:nth-child(1) a'));
        browser.ignoreSynchronization = true;
    
        this.isLogoHeaderPresent = function (cb) {
            cb(logoHeader.isPresent());
        }

        this.getContactNavLinkText = function(cb) {
            cb(contactNavLink.getText());
        }
    
    };
    
module.exports = NavigationMenu;
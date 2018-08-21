'use strict';

var AmexHomePage = require('../pageObjects/amexHome');
var NavigationMenu = require('../pageObjects/crmNavigation');

var data = require('../helper/helper')('amexHome');

var input = {
    username: 'Sindoori.LSMUser',
    password: 'Beanstalk415&'
}

describe('CRM Home Page Login ', function () {

    var url;
    var amexHomePageInstance, contactPageInstance;

    url = data.url;

    beforeAll(function () {
        amexHomePageInstance = new AmexHomePage(data.isNonAngular);
        amexHomePageInstance.get(url);
    });

    it('Should have appropriate Welocme text', function () {
        amexHomePageInstance.getWelcomeMessage(function(text){
            expect(text).toBe("Welcome to CRM");
        });
    });

    it('Should login with valid username and password', function() {
            amexHomePageInstance.enterUserName(input.username);
            amexHomePageInstance.enterPassword(input.password);
            amexHomePageInstance.login(function(){
                contactPageInstance = new NavigationMenu();
                contactPageInstance.isLogoHeaderPresent(function(isPresent){
                    expect(isPresent).toBe(true);
                });
            });
    });

    it('Should have valid navigation links in contact page', function() {
        contactPageInstance.getContactNavLinkText(function(linkText){
            expect(linkText).toBe('Contacts')
        });
    });
});

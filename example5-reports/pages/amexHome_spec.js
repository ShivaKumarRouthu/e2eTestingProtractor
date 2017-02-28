'use strict';

var AmexHomePage = require('../pageObjects/amexHome');
var data = require('../helper/helper')('amexHome');

describe('The American Express HomePage URL', function () {

    var url;
    var amexHomePageInstance;

    url = data.url;

    beforeAll(function () {
        amexHomePageInstance = new AmexHomePage(data.isNonAngular);
        amexHomePageInstance.get(url);
    });

    it('should expect to launch home page and see appropriate title', function () {
        amexHomePageInstance.getTitle(function (title) {
            expect(title).toEqual(data.title);
        });
    });

    it('Should have appropriate country name', function () {
        amexHomePageInstance.getCountry(function(country){
            expect(country).toBe(data.country);
        });
    });

     it('Should have appropriate Nav Tab text element', function () {
        amexHomePageInstance.getYourAccountText(function(text){
            expect(text).toBe("YOUR ACCOUNT");
        });
    });
});
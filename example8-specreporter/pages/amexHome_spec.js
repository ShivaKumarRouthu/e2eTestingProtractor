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

    it('Should have appropriate banner text', function () {
        amexHomePageInstance.getHeroHeader(function(text){
            expect(text).toBe("Latest Offers and Updates from American Express");
        });
    });
});
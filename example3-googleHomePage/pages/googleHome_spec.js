'use strict';

var GooglHome = require('../pageObjects/googleHome');
var data = require('../helper/helper')('googleHome');

describe('The Google HomePage', function(){
    it('should expect to launch google home page and see google text', function(){
        var url = data.url;
        browser.ignoreSynchronization = data.isNonAngular;
        browser.get(url);        
        var googlHomeobj = new GooglHome();
        googlHomeobj.getTitle(function(title){
            expect(title).toEqual(data.title);
        });
    });
});
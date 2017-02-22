'use strict';

describe('Testing title of the page', function(){
    it('Testing title of google', function(){
        browser.ignoreSynchronization = true;
        browser.get('https://www.google.co.in/');
        expect(browser.getTitle()).toEqual('Google');
    });
});
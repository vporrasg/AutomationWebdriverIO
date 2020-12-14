const searchResultPage = require('../pageobjects/searchResult.page');
const webService = require('../helpers/webService');
const assert = require('assert');
const fs = require('fs');

describe('Web Service Suite', () => {
    before(() => {
        browser.setWindowSize(1280, 720);
        browser.url("https://develop.terapeutica.digital/#/search");
    })
    
    it('Check webservice after click view terapist profile link', () => {
        searchResultPage.firstTerapistProfileLink.waitForClickable();
        browser.startTracing()
        searchResultPage.firstTerapistProfileLink.click();
        browser.endTracing()
        fs.writeFileSync('test/helpers/tracelog.json', JSON.stringify(browser.getTraceLogs()))
        let expectedWebService = "https://javito-stage.herokuapp.com/v1/specialist/1cd5bf4a-9166-429b-b993-cc1a47746c8e";
        assert.ok(webService.verifyWebService(expectedWebService));
    });

});



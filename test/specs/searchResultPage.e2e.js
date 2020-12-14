const searchResultPage = require('../pageobjects/searchResult.page');
const data = require('../helpers/data.helper');
const assert = require('assert');

describe('Search result page suite', () => {
    beforeEach(() => {
        browser.setWindowSize(1280, 720);
        browser.url("https://develop.terapeutica.digital/#/search");
    })

    it('URL change after click filter from search result page', () => {
        let urlWithFilterSelected = data.getURLWithFilterSelected();
        let i = 0;
        searchResultPage.specialtyFilterSearchResult.forEach(element => {
            element.waitForClickable();
            element.click();
            expect(browser).toHaveUrlContaining(urlWithFilterSelected[i])
            i++
        });
    });

    it('Search terapist from search result page', () => {
        let name = data.getNameForSearchTests();
        let resultsBeforeNameSearch = searchResultPage.quantityOfResults.getText();
        searchResultPage.searchInput.setValue(name);
        searchResultPage.searchButton.waitForClickable();
        searchResultPage.searchButton.click();
        browser.pause(3000);
        let resultsAfterNameSearch = searchResultPage.quantityOfResults.getText();
        searchResultPage.verifyNameInFirstResult(name);
        //La proxima verificacion tiene como objetivo verificar que la pagina
        // se refresco despues de dar click en el boton buscar
        assert.notStrictEqual(resultsBeforeNameSearch, resultsAfterNameSearch);
    });

    it('Hide map from search result page', () => {
        searchResultPage.view_hideMapButton.waitForClickable();
        searchResultPage.view_hideMapButton.click();
        searchResultPage.mapFromSearchResultPage.waitForDisplayed({ reverse: true });
    });
});



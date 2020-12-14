const homePage = require('../pageobjects/home.page');
const searchResultPage = require('../pageobjects/searchResult.page');
const data = require('../helpers/data.helper');


describe('Homepage Suite', () => {  
    beforeEach( () => {
        browser.setWindowSize(1280, 720); 
        browser.url("https://develop.terapeutica.digital/#/");
    })

    it('Check URL after click search button', () => {
        homePage.searchButton.waitForClickable();
        homePage.searchButton.click();
        expect(browser).toHaveUrl(homePage.pageUrl);        
    });

    it('Placeholder from search input', () => {
        let expectedPlaceholder = data.getPlaceholder();
        homePage.specialtyFilter.waitForClickable();
        homePage.specialtyFilter.click();       
        expect(homePage.searchInput).toHaveAttribute('placeholder', expectedPlaceholder)
        expect(homePage.searchInput).toBeFocused();      
    });

    it('Search terapist from homepage search input', () => {
        let name = data.getNameForSearchTests();        
        homePage.searchInput.setValue(name);
        homePage.searchButton.waitForClickable();
        homePage.searchButton.click();
        searchResultPage.verifyNameInFirstResult(name);     
    });
});



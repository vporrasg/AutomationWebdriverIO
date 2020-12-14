const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchResultPage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchButton() { return $('input[type=submit]') }
    get searchInput() { return $('input.form-control') }
    get specialtyFilterSearchResult() { return $$('.switch-field > a') }
    get terapistNameFirstResult () {return $('.strip_list > h3') }
    get view_hideMapButton () {return $('.layout_view > a') }
    get mapFromSearchResultPage () {return $('.google-map') }
    get firstTerapistProfileLink () {return $$('a.btn_listing')[0] }
    get quantityOfResults () {return $('#results div > h4') }    
    
    verifyNameInFirstResult(name) {
        expect(this.terapistNameFirstResult).toHaveTextContaining(name);
    }

    pageUrl = 'https://develop.terapeutica.digital/#/';

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open();
    }
}

module.exports = new SearchResultPage();

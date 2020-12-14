const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchButton () {return $('.btn_search') }
    get specialtyFilter () {return $$('#custom-search-input > ul > li')[0] }
    get searchInput () {return $('#search-input') }

    pageUrl = 'https://develop.terapeutica.digital/#/';

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new HomePage();

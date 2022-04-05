require('selenium-webdriver/chrome');

const { By, Key } = require('selenium-webdriver');


export class AddressesPage {

    constructor() { }

    //#region Locators

    navigationText = By.className('navigation_page');
    checkOutBtn = By.xpath('/html/body/div/div[2]/div/div[3]/div/form/p/button');

    //#endregion Locators
    
}

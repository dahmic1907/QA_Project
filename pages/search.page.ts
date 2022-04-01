require('selenium-webdriver/chrome');

const { By, Key } = require('selenium-webdriver');


export class SearchPage{
    
    constructor() { }

    //#region  Locators

    productUrl = By.className('product_img_link');
    paragraph = By.className('heading-counter');
    productTitle = By.css('h1');

    //#endregion Locators

}

require('selenium-webdriver/chrome');

const { By, Key } = require('selenium-webdriver');


export class CartPage{

    constructor() { }

    //#region Locators

    navigatonText = By.className('alert alert-warning');
    checkOutBtn = By.xpath('//*[@id="center_column"]/p[2]/a[1]');
    iconTrash = By.className('icon-trash');


    //#endregion Locators

}

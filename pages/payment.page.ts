require('selenium-webdriver/chrome');

const { By, Key } = require('selenium-webdriver');


export class PaymentPage{

    constructor() { }

    //#region  Locators

    checkOutBtn = By.xpath('/html/body/div/div[2]/div/div[3]/div/div/form/p/button');
    payByCheckBtn = By.xpath('/html/body/div/div[2]/div/div[3]/div/div/div[3]/div[2]/div/p/a'); 
    serviceCheckBox = By.id('cgv');
    confirmBtn = By.xpath('/html/body/div/div[2]/div/div[3]/div/form/p/button');
    paragraph = By.className('alert alert-success');

    //#endregion Locators

}

require('selenium-webdriver/chrome');

const { By, Key } = require('selenium-webdriver');


export class TshirtsPage{
   
    constructor() { }

    //#region  Locators

    navigationText = By.className('category-name');
    addToCartBtn = By.id('add_to_cart'); 
    productLink = By.xpath('/html/body/div/div[2]/div/div[3]/div[2]/ul/li/div/div[2]/h5/a'); 
    
    //#endregion Locators

}

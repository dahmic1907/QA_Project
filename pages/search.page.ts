import { WebDriver } from "selenium-webdriver";

require('selenium-webdriver/chrome');
const { By, Key, until } = require('selenium-webdriver');
export class SearchPage{
    protected driver: WebDriver;
 
    constructor(driver: WebDriver){
        this.driver = driver;
    }

    //#region  Locators
    private productUrl = By.className('product_img_link');
    private paragraph = By.className('heading-counter');
    //#endregion Locators

    //#region Methods
    public async getParagraphText(){
        return await this.driver.findElement(this.paragraph).getText();
    }
    public async clickOnProduct(){
        await this.driver.sleep(500);
        await this.driver.findElement(this.productUrl).click();
    }
    //#endregion Methods

}

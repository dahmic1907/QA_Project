import { WebDriver } from "selenium-webdriver";

require('selenium-webdriver/chrome');
const { By, Key, until } = require('selenium-webdriver');
export class DressesPage{
    protected driver: WebDriver;
    
    constructor(driver: WebDriver){
        this.driver = driver;
    }

    //#region  Locators
    private navigationText = By.className('title_block');
    //#endregion Locators

    //#region Methods
    public async getNavigationText(){

        return this.navigationText = await this.driver.findElement(this.navigationText).getText();

    }
    //#endregion Methods

}
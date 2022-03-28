import { WebDriver } from "selenium-webdriver";

require('selenium-webdriver/chrome');
const { By, Key, until } = require('selenium-webdriver');
export class ContactUsPage{

    protected driver: WebDriver;
    
    constructor(driver: WebDriver){
        this.driver = driver;
    }
    //#region Locators
    private navigationText = By.className('navigation_page');
    //#endregion Locators


    //#region Methods
    public async getNavigationText(){
        
        return await this.driver.findElement(this.navigationText).getText();
    }
    
    //#endregion Methods

}

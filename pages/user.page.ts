import { WebDriver } from "selenium-webdriver";

require('selenium-webdriver/chrome');
const { By, Key, until } = require('selenium-webdriver');
export class UserAccountPage{
    protected driver: WebDriver;
  
    constructor(driver: WebDriver){
        this.driver = driver;
    }

    //#region  Locators
    private navigationText = By.className('navigation_page');
    private logOutBtn = By.className('logout');
    //#endregion Locators

    //#region Methods
    public async getNavigationText(){
        return await this.driver.findElement(this.navigationText).getText();
    }

    public async clickOnSignOutBtn(){
        await this.driver.findElement(this.logOutBtn).click(); 
        await this.driver.sleep(100);
    }
    //#endregion Methods

}

import { WebDriver } from "selenium-webdriver";

require('selenium-webdriver/chrome');
const { By, Key, until } = require('selenium-webdriver');
export class AddressesPage {

    protected driver: WebDriver;

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    //#region Locators
    private navigationText = By.className('navigation_page');
    private checkOutBtn = By.xpath('/html/body/div/div[2]/div/div[3]/div/form/p/button');

    //#endregion Locators
    

    //#region Methods
    public async getNavigationText() {

        return await this.driver.findElement(this.navigationText).getText();
    }

    public async clickOnProceedToCheckOutBtn() {

        await this.driver.findElement(this.checkOutBtn).click();
        await this.driver.sleep(1000);
    }

    //#endregion Methods

}

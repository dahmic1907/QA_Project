import { WebDriver } from "selenium-webdriver";

require('selenium-webdriver/chrome');
const { By, Key, until } = require('selenium-webdriver');
export class CartPage{

    protected driver: WebDriver;    
    
    constructor(driver: WebDriver){
        this.driver = driver;
    }

    //#region Locators
    private navigatonText = By.className('alert alert-warning');
    private checkOutBtn = By.xpath('//*[@id="center_column"]/p[2]/a[1]');
    //#endregion Locators

    //#region Methods
    public async getParagraphText(){
        return await this.driver.findElement(this.navigatonText).getText();
    }
    
    public async clickOnProceedToChectOutBtn(){
        await this.driver.findElement(this.checkOutBtn).click(); 
        await this.driver.sleep(5000);
    }

    //#endregion Methods

}

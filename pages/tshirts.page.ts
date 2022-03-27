import { WebDriver } from "selenium-webdriver";

require('selenium-webdriver/chrome');
const { By, Key, until } = require('selenium-webdriver');
export class TshirtsPage{
    protected driver: WebDriver;
    
    constructor(driver: WebDriver){
        this.driver = driver;
    }

    //#region  Locators
    private navigationText = By.className('category-name');
    private addToCartBtn = By.id('add_to_cart'); 
    private productLink = By.xpath('/html/body/div/div[2]/div/div[3]/div[2]/ul/li/div/div[2]/h5/a'); 
    //#endregion Locators

    //#region Methods
    public async getNavigationText(){
        
        return this.navigationText = await this.driver.findElement(this.navigationText).getText();
    }
    public async clickOnAddToCartBtn(){
        await this.driver.sleep(500);
        await this.driver.findElement(this.addToCartBtn).click();
        await this.driver.sleep(500);
    }
    public async clickOnProductLink(){
        await this.driver.findElement(this.productLink).click();
    }
    //#endregion Methods
}

import { WebDriver } from "selenium-webdriver";

require('selenium-webdriver/chrome');
const { By, Key, until } = require('selenium-webdriver');
export class PaymentPage{

    protected driver: WebDriver;
    
    constructor(driver: WebDriver){
        this.driver = driver;
    }

    //#region  Locators
    private checkOutBtn = By.xpath('/html/body/div/div[2]/div/div[3]/div/div/form/p/button');
    private payByCheckBtn = By.xpath('/html/body/div/div[2]/div/div[3]/div/div/div[3]/div[2]/div/p/a'); 
    private serviceCheckBox = By.id('cgv');
    private confirmBtn = By.xpath('/html/body/div/div[2]/div/div[3]/div/form/p/button');
    private paragraph = By.className('alert alert-success');
    //#endregion Locators

    //#region Methods
    
    public async clickOnProceedToCheckOutBtn(){
        await this.driver.findElement(this.checkOutBtn).click();
        await this.driver.sleep(1000);
    }

    public async clickOnTermsOfService(){
        await this.driver.findElement(this.serviceCheckBox).click();
        await this.driver.sleep(1000);
    }

    public async clickOnPayByCheck(){
        this.payByCheckBtn = await this.driver.findElement(this.payByCheckBtn).click();
        await this.driver.sleep(1000)
    }
    public async clickOnConfirmBtn(){
        this.confirmBtn =  this.driver.findElement(this.confirmBtn).click();
        await this.driver.sleep(1000);
    }

    public async getParagraphText(){
        var text = await this.driver.findElement(this.paragraph).getText();
        await this.driver.sleep(500);
        return text;
    }
    //#endregion Methods

}

require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver')

import { Builder, WebDriver } from "selenium-webdriver";
import { DriverSetup } from "./web.driver.setup";
import { AuthenticationPage } from "./pages/authentication.page";

const rootURL = 'http://automationpractice.com/index.php';


export class BrowserHelper {

    public driver: WebDriver;
    public driverSetup = new DriverSetup();

    constructor() {
        this.driver = this.driverSetup.driver;
    }

    async goToPage(link: string) {
        return this.driver.get(link);
    }

    async click(elementLocator: any) {
        return (this.driver.findElement(elementLocator).click());
    }

    async getText(elementLocator: any) {

        return (this.driver.findElement(elementLocator).getText());

    }

    async sendKeys(elementLocator: any, inputData: string) {

        await this.driver.findElement(elementLocator).sendKeys(inputData);

    }

    async enterDataAndClick(inputFieldLocator: any, inputData: string, submitLocator: any) {

        await this.driver.findElement(inputFieldLocator).clear();
        await this.driver.findElement(inputFieldLocator).sendKeys(inputData);
        await this.driver.sleep(500);
        await this.driver.findElement(submitLocator).click();
    
    }

    

    public async signUpToPage(firstName: string, lastName : string, passwd: string,address: string, city: string, state: string, postcode: string, phone: string){
        
        const authenticationPage = new AuthenticationPage();
        await this.driver.findElement(authenticationPage.firstName).sendKeys(firstName);
        await this.driver.findElement(authenticationPage.lastName).sendKeys(lastName);
        await this.driver.findElement(authenticationPage.passwd).sendKeys(passwd);
        await this.driver.findElement(authenticationPage.address).sendKeys(address);
        await this.driver.findElement(authenticationPage.city).sendKeys(city);
        await this.driver.findElement(authenticationPage.state).sendKeys(state);
        await this.driver.findElement(authenticationPage.postcode).sendKeys(postcode);
        await this.driver.findElement(authenticationPage.phone).sendKeys(phone);
        await this.driver.sleep(500);
        await this.driver.findElement(authenticationPage.submitAccountBtn).click();
        await this.driver.sleep(5000);

    }

    public async loginToPage(email: string, passwd: string) {

        const authenticationPage = new AuthenticationPage();
        await this.driver.findElement(authenticationPage.loginEmail).clear();
        await this.driver.findElement(authenticationPage.loginEmail).sendKeys(email);
        await this.driver.findElement(authenticationPage.passwd).clear();
        await this.driver.findElement(authenticationPage.passwd).sendKeys(passwd);
        await this.driver.findElement(authenticationPage.submitLoginBtn).click();
        await this.driver.sleep(1000);
        
    }

}

import { WebDriver } from "selenium-webdriver";

require('selenium-webdriver/chrome');
const { By, Key, until } = require('selenium-webdriver');
export class AuthentiPage{


    protected driver: WebDriver;

    constructor(driver: WebDriver){
        this.driver = driver;
    }
    //#region Locators
    private navigationText = By.className('navigation_page');
    private accountEmail = By.id('email_create');
    private submitBtn = By.id('SubmitCreate');
    private submitLoginBtn = By.id('SubmitLogin');
    private loginEmail = By.id('email');
    private firstName = By.id('customer_firstname'); 
    private lastName = By.id('customer_lastname'); 
    private passwd = By.id('passwd'); 
    private address = By.id('address1'); 
    private city = By.id('city'); 
    private state = By.id('id_state'); 
    private postcode = By.id('postcode');
    private phone = By.id('phone_mobile');
    //#endregion Locators

    //#region Methods
    public async submitAccountEmail(email: string){
        await this.driver.findElement(this.accountEmail).sendKeys(email);
        await this.driver.findElement(this.submitBtn).click();
        await this.driver.sleep(5000);
    }

    public async submitSignInData(email: string, passwd : string){
        await this.driver.findElement(this.loginEmail).sendKeys(email);
        await this.driver.findElement(this.passwd).sendKeys(passwd);
        await this.driver.findElement(this.submitLoginBtn).click();
        await this.driver.sleep(500);
    }

    public async submitSignUpData(firstName: string, lastName : string, passwd: string,address: string, city: string, state: string, postcode: string, phone: string){
        await this.driver.findElement(this.firstName).sendKeys(firstName);
        await this.driver.findElement(this.lastName).sendKeys(lastName);
        await this.driver.findElement(this.passwd).sendKeys(passwd);
        await this.driver.findElement(this.address).sendKeys(address);
        await this.driver.findElement(this.city).sendKeys(city);
        await this.driver.findElement(this.state).sendKeys(state);
        await this.driver.findElement(this.postcode).sendKeys(postcode);
        await this.driver.findElement(this.phone).sendKeys(phone);
        await this.driver.findElement(this.submitBtn).click();
        await this.driver.sleep(500);
    }

    public async getNavigationText(){
        
        return await this.driver.findElement(this.navigationText).getText();
    }

    //#endregion

}

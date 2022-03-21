require('selenium-webdriver/chrome');
const {By, Key, until } = require('selenium-webdriver');
export class AuthentiPage{
    private driver;
    private accountEmail;
    private loginPassword;
    private loginEmail;
    private firstName;
    private lastName; 
    private passwd; 
    private address; 
    private city; 
    private state; 
    private postcode
    private phone;

    constructor(driver){
        this.driver = driver;
    }

//#region methods
    public async submitAccountEmail(email: string){
        this.accountEmail = await this.driver.findElement(By.id('email_create'))
        this.accountEmail.sendKeys(email);
        await this.driver.findElement(By.id('SubmitCreate')).click();
        await this.driver.sleep(5000);
    }

    public async submitSignInData(email: string, passwd : string){
        this.loginEmail = await this.driver.findElement(By.id('email')).sendKeys(email);
        this.loginPassword = await this.driver.findElement(By.id('passwd')).sendKeys(passwd);
        await this.driver.findElement(By.id('SubmitLogin')).click();
        await this.driver.sleep(500);
    }

    public async submitSignUpData(firstName: string, lastName : string,passwd: string,address: string,city: string, state: string, postcode: string,phone: string){
        this.firstName = await this.driver.findElement(By.id('customer_firstname')).sendKeys(firstName);
        this.lastName = await this.driver.findElement(By.id('customer_lastname')).sendKeys(lastName);
        this.passwd = await this.driver.findElement(By.id('passwd')).sendKeys(passwd);
        this.address = await this.driver.findElement(By.id('address1')).sendKeys(address);
        this.city = await this.driver.findElement(By.id('city')).sendKeys(city);
        this.state = await this.driver.findElement(By.id('id_state')).sendKeys(state);
        this.postcode = await this.driver.findElement(By.id('postcode')).sendKeys(postcode);
        this.phone = await this.driver.findElement(By.id('phone_mobile')).sendKeys(phone);
        await this.driver.findElement(By.id('submitAccount')).click();
        await this.driver.sleep(500);
    }

    public async getNavigationText(){
        
        return await this.driver.findElement(By.className('navigation_page')).getText();
    }

//#endregion

}
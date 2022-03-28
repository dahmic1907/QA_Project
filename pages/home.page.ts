import { WebDriver } from "selenium-webdriver";

require('selenium-webdriver/chrome');
const { By, Key, until } = require('selenium-webdriver');

export class HomePage{
    protected driver: WebDriver;
   
    constructor(driver: WebDriver){
        this.driver = driver;
    }

    //#region  Locators
    private homeIcon = By.className('icon-home'); 
    private cartText = By.className('ajax_cart_no_product'); 
    private cartLink = By.xpath('/html/body/div/div[1]/header/div[3]/div/div/div[3]/div/a'); 
    private searchBox = By.name('search_query');
    private searchButton = By.name('submit_search');
    private womenBtn = By.className('sf-with-ul'); 
    private dressesBtn = By.xpath('/html/body/div/div[1]/header/div[3]/div/div/div[6]/ul/li[2]/a');
    private tshirtsBtn = By.xpath('/html/body/div/div[1]/header/div[3]/div/div/div[6]/ul/li[3]/a');
    private contactUsBtn = By.id('contact-link'); 
    private signInBtn = By.className('login'); 
    private newsletterFld = By.id('newsletter-input');
    private facebookIcon = By.className('facebook');
    private twitterIcon = By.className('twitter');
    private youtubeIcon = By.className('youtube');
    private alertMessage = By.className('alert alert-success');
    //#endregion Locators

    //#region Methods
    public async getCartText() {
       return await this.driver.findElement(this.cartText).getText();
    }

    public async clickOnCart(){
        await this.driver.findElement(this.cartLink).click();
    }

    public async useSearcBox(searchedItem: string){
        this.searchBox = await this.driver.findElement(this.searchBox);
        await this.searchBox.sendKeys(searchedItem);
        await this.driver.findElement(this.searchButton).click();
        await this.driver.sleep(500);
    }

    public async clickOnWomenBtn(){
        await this.driver.sleep(500);
        await this.driver.findElement(this.womenBtn).click();
    }

    public async clickOnDressesBtn(){
        await this.driver.findElement(this.dressesBtn).click(); 
        await this.driver.sleep(500);
    }

    public async clickOnThirtsBtn(){
        await this.driver.sleep(500);
        await this.driver.findElement(this.tshirtsBtn).click();
    }

    public async clickOnContactUsBtn(){
        await this.driver.sleep(500);
        await this.driver.findElement(this.contactUsBtn).click();
    }

    public async subscribeToNewsletter(email: string){
        await this.driver.findElement(this.homeIcon).click();
        await this.driver.findElement(this.newsletterFld).sendKeys(email,  Key.ENTER);
        return await this.driver.findElement(this.alertMessage).getText();
    }

    public async clickOnFacebookIcon(){
        this.facebookIcon = await this.driver.findElement(this.facebookIcon).click();
    }

    public async clickOnTwitterIcon(){
        await this.driver.sleep(500);
        this.twitterIcon = await this.driver.findElement(this.twitterIcon).click();
    }

    public async clickOnYoutubeIcon(){
        await this.driver.sleep(500);
        this.youtubeIcon = await this.driver.findElement(this.youtubeIcon).click();
    }
    public async clickOnSignInBtn(){
        await this.driver.findElement(this.signInBtn).click()
    }

    //#endregion Methods
    
}

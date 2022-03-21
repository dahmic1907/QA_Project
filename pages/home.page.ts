require('selenium-webdriver/chrome');
const {By, Key, until } = require('selenium-webdriver');


export class HomePage{
    private driver;
    private homeIcon; 
    private cartText; 
    private cartLink; 
    private searchBox;
    private womenBtn; 
    private dressesBtn;
    private tshirtsBtn;
    private contactUsBtn;
    private signInBtn; 
    private newsletterFld;
    private facebookIcon;
    private twitterIcon;
    private youtubeIcon;
    constructor(driver){
        this.driver = driver;
    }

    //#region methods
    public async getCartText() {
       this.cartText = await this.driver.findElement(By.className('ajax_cart_no_product')).getText();
       return this.cartText;
    }

    public async clickOnCart(){
        this.cartLink = await this.driver.findElement(By.xpath('/html/body/div/div[1]/header/div[3]/div/div/div[3]/div/a'));
        await this.cartLink.click();
    }

    public async useSearcBox(input: string){
        this.searchBox = await this.driver.findElement(By.name('search_query'));
        let searchButton = await this.driver.findElement(By.name('submit_search'));
        await this.searchBox.sendKeys(input);
        await searchButton.click();
        await this.driver.sleep(500);
    }

    public async clickOnWomenBtn(){
        this.womenBtn = await this.driver.findElement(By.className('sf-with-ul'));
        await this.womenBtn.click();
    }

    public async clickOnDressesBtn(){
        this.dressesBtn = await this.driver.findElement(By.xpath('/html/body/div/div[1]/header/div[3]/div/div/div[6]/ul/li[2]/a'));
        this.dressesBtn.click();
        await this.driver.sleep(500);
    }

    public async clickOnThirtsBtn(){
        await this.driver.sleep(500);
        this.tshirtsBtn = await this.driver.findElement(By.xpath('/html/body/div/div[1]/header/div[3]/div/div/div[6]/ul/li[3]/a'));
        this.tshirtsBtn.click();
    }

    public async clickOnContactUsBtn(){
        await this.driver.sleep(500);
        this.contactUsBtn = await this.driver.findElement(By.id('contact-link'));
        this.contactUsBtn.click();
    }

    public async subscribeToNewsletter(input: string){
       this.homeIcon = await this.driver.findElement(By.className('icon-home'));
       this.homeIcon.click();
       this.newsletterFld = await this.driver.findElement(By.id('newsletter-input'))
       this.newsletterFld.sendKeys(input,  Key.ENTER);
       return await this.driver.findElement(By.className('alert alert-success')).getText();
    }

    public async clickOnFacebookIcon(){
         this.facebookIcon = await this.driver.findElement(By.className('facebook'));
         await this.facebookIcon.click();
    }

    public async clickOnTwitterIcon(){
        await this.driver.sleep(500);
        this.twitterIcon = await this.driver.findElement(By.className('twitter'));
        await this.twitterIcon.click();
    }

    public async clickOnYoutubeIcon(){
        await this.driver.sleep(500);
        this.youtubeIcon = await this.driver.findElement(By.className('youtube'));
        await this.youtubeIcon.click();
    }
    public async clickOnSignInBtn(){
        this.signInBtn = await this.driver.findElement(By.className('login'));
        await this.signInBtn.click();
    }

    //#endregion
    

}
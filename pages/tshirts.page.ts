require('selenium-webdriver/chrome');
const {By, Key, until } = require('selenium-webdriver');
export class TshirtsPage{
    private driver;
    private navigationText;
    private addToCartBtn; 
    private productLink; 
    
    constructor(driver){
        this.driver = driver;
    }

//#region methods
    public async getNavigationText(){
        
        return this.navigationText = await this.driver.findElement(By.className('category-name')).getText();
    }
    public async clickOnAddToCartBtn(){
        await this.driver.sleep(500);
        this.addToCartBtn = await this.driver.findElement(By.id('add_to_cart'));
        this.addToCartBtn.click();
        await this.driver.sleep(500);
    }
    public async clickOnProductLink(){
        this.productLink = await this.driver.findElement(By.xpath('/html/body/div/div[2]/div/div[3]/div[2]/ul/li/div/div[2]/h5/a'));
        this.productLink.click();
    }
    

//#endregion

}
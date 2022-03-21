require('selenium-webdriver/chrome');
const {By, Key, until } = require('selenium-webdriver');
export class SearchPage{
    private driver;
    private productUrl;
    
    constructor(driver){
        this.driver = driver;
    }
//#region methods
    public async getParagraphText(){
        return await this.driver.findElement(By.className('heading-counter')).getText();
    }
    public async clickOnProduct(){
        await this.driver.sleep(500);
        this.productUrl  = await this.driver.findElement(By.className('product_img_link'));
        await this.productUrl.click();
    }

//#endregion

}
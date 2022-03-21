require('selenium-webdriver/chrome');
const {By, Key, until } = require('selenium-webdriver');
export class CartPage{
    private driver;
    private checkOutBtn;
    
    constructor(driver){
        this.driver = driver;
    }
//#region methods
    public async getParagraphText(){
        return await this.driver.findElement(By.className('alert alert-warning')).getText();
    }
    
    public async clickOnProceedToChectOutBtn(){
        this.checkOutBtn = await this.driver.findElement(By.xpath('//*[@id="center_column"]/p[2]/a[1]'));
        this.checkOutBtn.click(); 
        await this.driver.sleep(5000);
    }

//#endregion

}
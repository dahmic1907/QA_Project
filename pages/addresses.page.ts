require('selenium-webdriver/chrome');
const {By, Key, until } = require('selenium-webdriver');
export class AddressesPage{
    private driver;
    private navigationText;
    private checkOutBtn; 
    
    constructor(driver){
        this.driver = driver;
    }

//#region methods
    public async getNavigationText(){
        
        return this.navigationText = await this.driver.findElement(By.className('navigation_page')).getText();
    }

    public async clickOnProceedToCheckOutBtn(){
        this.checkOutBtn = await this.driver.findElement(By.xpath('/html/body/div/div[2]/div/div[3]/div/form/p/button'));
        this.checkOutBtn.click();
        await this.driver.sleep(1000);
    }

//#endregion

}
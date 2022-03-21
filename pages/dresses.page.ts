require('selenium-webdriver/chrome');
const {By, Key, until } = require('selenium-webdriver');
export class DressesPage{
    private driver;
    private navigationText;
    
    constructor(driver){
        this.driver = driver;
    }

//#region methods
    public async getNavigationText(){

        return this.navigationText = await this.driver.findElement(By.className('title_block')).getText();

    }
    

//#endregion

}
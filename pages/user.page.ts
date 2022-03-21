require('selenium-webdriver/chrome');
const {By, Key, until } = require('selenium-webdriver');
export class UserAccountPage{
    private driver;
    private navigationText;
    private logOutBtn;
    
    constructor(driver){
        this.driver = driver;
    }

//#region methods
    public async getNavigationText(){
        
        return this.navigationText = await this.driver.findElement(By.className('navigation_page')).getText();
    }

    public async clickOnSignOutBtn(){
        this.logOutBtn = await this.driver.findElement(By.className('logout'));
        this.logOutBtn.click(); 
        await this.driver.sleep(100);
    }
    

//#endregion

}
require('selenium-webdriver/chrome');
const {By, Key, until } = require('selenium-webdriver');
export class PaymentPage{
    private driver;
    private checkOutBtn;
    private payByCheckBtn; 
    private confirmBtn;
    
    constructor(driver){
        this.driver = driver;
    }

//#region methods
    
    public async clickOnProceedToCheckOutBtn(){
        this.checkOutBtn = await this.driver.findElement(By.xpath('/html/body/div/div[2]/div/div[3]/div/div/form/p/button'));
        this.checkOutBtn.click();
        await this.driver.sleep(1000);
    }

    public async clickOnTermsOfService(){
        await this.driver.findElement(By.id('cgv')).click();
        await this.driver.sleep(1000);
    }

    public async clickOnPayByCheck(){
        this.payByCheckBtn = await this.driver.findElement(By.xpath('/html/body/div/div[2]/div/div[3]/div/div/div[3]/div[2]/div/p/a'));
        this.payByCheckBtn.click();
        await this.driver.sleep(1000)
    }
    public async clickOnConfirmBtn(){
        this.confirmBtn =  this.driver.findElement(By.xpath('/html/body/div/div[2]/div/div[3]/div/form/p/button'));
        this.confirmBtn.click();
        await this.driver.sleep(1000);
    }

    public async getParagraphText(){
        var text = await this.driver.findElement(By.className('alert alert-success')).getText();
        await this.driver.sleep(500);
        return text;
    }

    

//#endregion

}
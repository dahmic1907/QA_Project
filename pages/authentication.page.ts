require('selenium-webdriver/chrome');

const { By, Key } = require('selenium-webdriver');


export class AuthenticationPage{

    constructor() { }

    //#region Locators
    
    navigationText = By.className('navigation_page');
    accountEmail = By.id('email_create');
    submitEmailBtn = By.id('SubmitCreate')
    submitAccountBtn = By.xpath('//*[@id="submitAccount"]');
    submitLoginBtn = By.id('SubmitLogin');
    loginEmail = By.id('email');
    firstName = By.id('customer_firstname'); 
    lastName = By.id('customer_lastname'); 
    passwd = By.id('passwd'); 
    address = By.id('address1'); 
    city = By.id('city'); 
    state = By.id('id_state'); 
    postcode = By.id('postcode');
    phone = By.id('phone_mobile');
     
    //#endregion Locators

}

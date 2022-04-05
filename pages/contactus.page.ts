require('selenium-webdriver/chrome');

const { By, Key } = require('selenium-webdriver');


export class ContactUsPage{

    constructor() { }
    
    //#region Locators

    navigationText = By.className('navigation_page');
    emailFld = By.id('email');
    subjectHeading = By.xpath('//*[@id="id_contact"]');
    messageArea = By.id('message');
    sendBtn = By.xpath('//*[@id="submitMessage"]');
    alertMessage = By.className('alert alert-success');

}

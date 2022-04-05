require('selenium-webdriver/chrome');

const { By, Key } = require('selenium-webdriver');


export class UserAccountPage{
   
    constructor() { }

    //#region  Locators

    navigationText = By.className('navigation_page');
    logOutBtn = By.className('logout');

    //#endregion Locators

}

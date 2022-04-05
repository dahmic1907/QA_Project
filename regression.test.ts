require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver')

import { BrowserHelper} from "./browser.helper";
import { GetPageLocators } from "./page.objects";

const { By } = require('selenium-webdriver');

const rootURL = 'http://automationpractice.com/index.php';

let browser = new BrowserHelper();
let pageLocators = new GetPageLocators();
console.log("No results were found for your search \"jeans\"");

describe('Regression tests for Demo Application', () => {

  describe('Tests - home page', () => {
    
    it('Check that cart is empty when new user launches the app', async () => {

      await browser.goToPage(rootURL);
      await browser.driver.sleep(2000);
      var text = await browser.getText(pageLocators.getHomePage().cartText);
      expect(text).toEqual("(empty)");
      await browser.click(pageLocators.getHomePage().cartLink);
      await browser.driver.sleep(1000);
      expect(await browser.getText(pageLocators.getCartPage().navigatonText)).toEqual("Your shopping cart is empty.");
      await browser.driver.sleep(500);

    });

    it('Check Newsletter option when  the entered email is incorrect', async () => {

      await browser.driver.sleep(500);
      await browser.click(pageLocators.getHomePage().homeIcon);
      await browser.enterDataAndClick(pageLocators.getHomePage().newsletterFld, "dahmcic.gmail.coo", pageLocators.getHomePage().submitNewsletterBtn);
      await browser.driver.sleep(500);
      expect(await browser.getText(pageLocators.getHomePage().alertMessageDanger)).toEqual('Newsletter : Invalid email address.');
      await browser.driver.sleep(500);

    });

    it('Check Newsletter option when the entered email is already registered', async () => {

      await browser.driver.sleep(500);
      await browser.enterDataAndClick(pageLocators.getHomePage().newsletterFld, "dtzena.ahm@gmail.coo", pageLocators.getHomePage().submitNewsletterBtn);
      await browser.driver.sleep(500);
      expect(await browser.getText(pageLocators.getHomePage().alertMessageDanger)).toEqual('Newsletter : This email address is already registered.');
      await browser.driver.sleep(500);

    });
   
    it('Check Search option when the user just clicks on the search icon', async () => {

      await browser.driver.sleep(5000);
      await browser.click(pageLocators.getHomePage().searchButton);
      await browser.driver.sleep(500);
      expect(await browser.getText(pageLocators.getSearchPage().paragraph)).toEqual("0 results have been found.");
      expect(await browser.getText(pageLocators.getSearchPage().searchMessage)).toEqual("Please enter a search keyword");
      await browser.driver.sleep(500);

    });

    
    it('Check Search option by inserting jeans item', async () => {

      await browser.driver.sleep(5000);
      await browser.click(pageLocators.getHomePage().searchButton);
      await browser.driver.sleep(2000);
      await browser.enterDataAndClick(pageLocators.getHomePage().searchBox, "jeans", pageLocators.getHomePage().searchButton);
      await browser.driver.sleep(500);
      expect(await browser.getText(pageLocators.getSearchPage().paragraph)).toEqual("0 results have been found.");
      expect(await browser.getText(pageLocators.getSearchPage().searchMessage)).toEqual("No results were found for your search \"jeans\"");
      await browser.driver.sleep(500);

    });

    it('Check Search option by inserting T-shirts item', async () => {

      await browser.driver.sleep(5000);
      await browser.click(pageLocators.getHomePage().searchButton);
      await browser.driver.sleep(2000);
      await browser.enterDataAndClick(pageLocators.getHomePage().searchBox, "T-shirts", pageLocators.getHomePage().searchButton);
      await browser.driver.sleep(500);
      expect(await browser.getText(pageLocators.getSearchPage().paragraph)).toEqual("1 result has been found.");
      await browser.click(pageLocators.getSearchPage().productUrl);
      await browser.driver.sleep(500);
      expect(await browser.getText(pageLocators.getSearchPage().productTitle)).toEqual("Faded Short Sleeve T-shirts");
      await browser.driver.sleep(500);  

    });

    it('Check that user is allowed to use CUSTOMER SERVICE option by sending a message about problems', async () => {

      await browser.driver.sleep(500);
      await browser.click(pageLocators.getHomePage().contactUsBtn);
      await browser.driver.sleep(500);
      await browser.sendKeys(pageLocators.getContactUsPage().emailFld, 'dzeny.ahmic@gmail.com');
      await browser.driver.sleep(500);
      await browser.sendKeys(pageLocators.getContactUsPage().subjectHeading, 'Customer service');
      await browser.enterDataAndClick(pageLocators.getContactUsPage().messageArea, "The application is often overloaded", pageLocators.getContactUsPage().sendBtn);
      await browser.driver.sleep(500);
      var result = await browser.getText(pageLocators.getContactUsPage().alertMessage);
      expect(result).toEqual("Your message has been successfully sent to our team.");

    });

  });

  describe('Tests- Authentication page', () => {

    it('Check sign in and add to cart options for registered user', async () => {
     
      await browser.driver.sleep(1000);
      await browser.click(pageLocators.getHomePage().signInBtn);
      await browser.loginToPage('dzeny.ahmic@gmail.com', '12345');
      await browser.click(pageLocators.getHomePage().tshirtsBtn);
      await browser.click(pageLocators.getTshirtsPage().productLink);
      await browser.click(pageLocators.getTshirtsPage().addToCartBtn);
      await browser.click(pageLocators.getHomePage().cartLink);
      await browser.driver.sleep(5000);
      await browser.click(pageLocators.getCartPage().iconTrash); 
      await browser.driver.sleep(1000);
      var result = await browser.getText(pageLocators.getCartPage().navigatonText);
      expect(result).toEqual("Your shopping cart is empty.");
      await browser.click(pageLocators.getUserPage().logOutBtn);
      await browser.driver.sleep(1000);

    });

    it('Check sign in option with an incorrect email address', async () => {
     
      await browser.driver.sleep(1000);
      await browser.click(pageLocators.getHomePage().signInBtn);
      await browser.loginToPage('dzeny.ahmic@gmail', '12345');
      var result = await browser.getText(pageLocators.getAuthenticationPage().LoginerrorMessage);
      expect(result).toEqual("Invalid email address.");
      await browser.driver.sleep(1000);

    });

    it('Check sign in option with an incorrect password', async () => {
     
      await browser.driver.sleep(1000);
      await browser.loginToPage('dzeny.ahmic@gmail.com', '1234567');
      var result = await browser.getText(pageLocators.getAuthenticationPage().LoginerrorMessage);
      expect(result).toEqual("Authentication failed.");
      await browser.driver.sleep(1000);

    });

    it('Check sign up option with the email address already used', async () => {
     
      await browser.driver.sleep(1000);
      await browser.enterDataAndClick(pageLocators.getAuthenticationPage().accountEmail, 'dzeny.ahmic@gmail.com', pageLocators.getAuthenticationPage().submitEmailBtn);
      await browser.driver.sleep(5000);
      var result = await browser.getText(pageLocators.getAuthenticationPage().signupErrorMessage);
      expect(result).toEqual("An account using this email address has already been registered. Please enter a valid password or request a new one.");
    });

  });

  afterAll(() => {
    browser.driver.quit();
  });

}); 
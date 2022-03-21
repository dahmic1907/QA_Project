require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver')

import { HomePage } from "./pages/home.page";
import { CartPage } from "./pages/cart.page";
import { SearchPage } from "./pages/search.page";
import { WomenPage } from "./pages/women.page";
import { DressesPage } from "./pages/dresses.page";
import { TshirtsPage } from "./pages/tshirts.page";
import { ContactUsPage } from "./pages/contactus.page";
import { AuthentiPage } from "./pages/authentication.page";
import { UserAccountPage } from "./pages/user.page";
import { AddressesPage } from "./pages/addresses.page";
import { PaymentPage } from "./pages/payment.page";

const { Builder, By } = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const { isAwaitExpression } = require('typescript');
const rootURL = 'http://automationpractice.com/index.php';


let driver = new Builder().forBrowser('chrome').build();

let homePage, womenPage, cartPage, searchPage, dressesPage, tshirtsPage, contactUsPage, authenticationPage,
 userAccountPage, addressesPage, paymentPage;


describe('Smoke tests for Demo Application',() =>{


  it('Waits for the driver to start', () => {
    return driver.then((_d: any) => {
      driver = _d
    })
  })

  it('Initialisation', () => {

    driver.manage().window().setPosition(0, 0);
    driver.manage().window().maximize();
    driver.get(rootURL);
    homePage = new HomePage(driver);
    cartPage = new CartPage(driver);
    searchPage = new SearchPage(driver);
    womenPage = new WomenPage(driver);
    dressesPage = new DressesPage(driver); 
    tshirtsPage = new TshirtsPage(driver);
    contactUsPage = new ContactUsPage(driver);
    authenticationPage = new AuthentiPage(driver);
    userAccountPage = new UserAccountPage(driver);
    addressesPage = new AddressesPage(driver);
    paymentPage = new PaymentPage(driver);
  })
  
  describe('Tests - home page', () => {

    it('Check that cart is empty when new user launches the app', async () =>{

      await driver.sleep(1000);
      var text = await homePage.getCartText();
      expect(text).toEqual("(empty)");
      await homePage.clickOnCart();
      await driver.sleep(1000);
      expect(await cartPage.getParagraphText()).toEqual("Your shopping cart is empty.");
      await driver.sleep(500);

    });
    
    it('Check Search option by inserting Blouse item', async  () =>{

      await driver.sleep(5000);
      await homePage.useSearcBox("Blouse");
      expect(await searchPage.getParagraphText()).toEqual("1 result has been found.");
      await searchPage.clickOnProduct();
      var productTitle = await driver.findElement(By.css('h1')).getText();
      expect(productTitle).toEqual("Blouse");
      await driver.sleep(500);
    })
   
    it('Redirecting to the Women page by clicking the Women button', async  () =>{

      await driver.sleep(500);
      await homePage.clickOnWomenBtn();
      expect(await womenPage.getNavigationText()).toEqual("Women");
    })
 
    it('Redirecting to the Dresses page by clicking the Dresses button', async  () =>{

      await driver.sleep(500);
      await homePage.clickOnDressesBtn();
      expect(await dressesPage.getNavigationText()).toEqual("DRESSES");
      await driver.sleep(5000);  

    })

    it('Redirecting to the T-shirts page by clicking the T-shirts button', async  () =>{

      await driver.sleep(500);
      await homePage.clickOnThirtsBtn();
      expect(await tshirtsPage.getNavigationText()).toEqual("T-shirts");
      await driver.sleep(500);  

    })

    it('Redirecting to the Contact us page by clicking the Contact us button', async  () =>{

      await driver.sleep(500);
      await homePage.clickOnContactUsBtn();
      expect(await contactUsPage.getNavigationText()).toEqual("Contact");
      await driver.sleep(500);  

    })

    it('Check Newsletter option', async  () =>{

      await driver.sleep(500);
      var result = await homePage.subscribeToNewsletter("dzeny.ahm@gmai.coo");
      expect(result).toEqual('Newsletter : You have successfully subscribed to this newsletter.');
      await driver.sleep(500);

    })

    it('Redirecting to the Facebook page by clicking the Facebook icon', async  () =>{

      await driver.sleep(500);
      const originalWindow = await driver.getWindowHandle();
      await homePage.clickOnFacebookIcon();
      const windows = await driver.getAllWindowHandles();
      windows.forEach(async (handle: any) => {
        if (handle !== originalWindow) {
          await driver.switchTo().window(handle);
        }
      });
      await driver.sleep(5000);
      let FacebookGroup = await driver.findElement(By.className('a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg g0qnabr5')).isEnabled;
      expect(FacebookGroup).not.toBeFalsy();
      await driver.sleep(500);
      await driver.close();
      await driver.switchTo().window(originalWindow);

    });

    it('Redirecting to the Twitter page by clicking the Twitter icon', async  () =>{

      await driver.sleep(500);
      const originalWindow = await driver.getWindowHandle();
      await homePage.clickOnTwitterIcon();
      const windows = await driver.getAllWindowHandles();
      windows.forEach(async (handle: any) => {
        if (handle !== originalWindow) {
          await driver.switchTo().window(handle);
        }
      });
      await driver.sleep(5000);
      let twitterProf = await driver.findElement(By.className('css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0')).isEnabled;
      expect(twitterProf).not.toBeFalsy();
      await driver.sleep(500);
      await driver.close();
      await driver.switchTo().window(originalWindow);

    });

    it('Redirecting to the YouTube page by clicking the YouTube icon', async  () =>{

      await driver.sleep(1000);
      const originalWindow = await driver.getWindowHandle();
      await homePage.clickOnYoutubeIcon(); 
      const windows = await driver.getAllWindowHandles();
      windows.forEach(async (handle: any) => {
        if (handle !== originalWindow) {
          await driver.switchTo().window(handle);
        }
      });
      await driver.sleep(10000);
      let twitterLogo = await driver.findElement(By.id('logo')).isEnabled;
      expect(twitterLogo).not.toBeFalsy();
      await driver.sleep(500);
      await driver.close();
      await driver.switchTo().window(originalWindow);

    });

  });
 
  describe('Tests- Authentication page', () => {
    
    it('Check sign up and sign out option', async  () =>{

      await driver.sleep(500);
      await homePage.clickOnSignInBtn();
      await authenticationPage.submitAccountEmail('dzen.ahmi@gmail.ckk');
      await authenticationPage.submitSignUpData('Dzeneta', 'Ahmic', '12345', 'Ive Andrica bb', 'Miami', 'Ive Andrica bb', '00000', '123 123 123');
      expect(await userAccountPage.getNavigationText()).toEqual("My account");
      await userAccountPage.clickOnSignOutBtn();
      expect(await authenticationPage.getNavigationText()).toEqual("Authentication");

    })

  });

  describe('Tests- Ordering products', () => {

    it('Logged user is able to make successful order of items', async  () =>{

      await driver.sleep(1000);
      await homePage.clickOnSignInBtn();
      await authenticationPage.submitSignInData('dzeny.ahmic@gmail.com', '12345');
      await homePage.clickOnThirtsBtn();
      await tshirtsPage.clickOnProductLink();
      await tshirtsPage.clickOnAddToCartBtn();
      await homePage.clickOnCart();
      await cartPage.clickOnProceedToChectOutBtn();
      await addressesPage.clickOnProceedToCheckOutBtn();
      await paymentPage.clickOnTermsOfService();
      await paymentPage.clickOnProceedToCheckOutBtn();
      await paymentPage.clickOnPayByCheck();
      await paymentPage.clickOnConfirmBtn();
      var result = await paymentPage.getParagraphText();
      expect(result).toEqual("Your order on My Store is complete.");
      var text = await homePage.getCartText();
      expect(text).toEqual("(empty)");
      await driver.sleep(500);  

    });

  });

  afterAll(() => {
    driver.quit();
  });

});

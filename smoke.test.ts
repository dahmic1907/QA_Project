require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver')

import { BrowserHelper} from "./browser.helper";
import { GetPageLocators } from "./page.objects";

const { By } = require('selenium-webdriver');

const rootURL = 'http://automationpractice.com/index.php';

let browser = new BrowserHelper();
let pageLocators = new GetPageLocators();


describe('Smoke tests for Demo Application', () => {

  describe('Tests - home page', () => {

    it('Check Search option by inserting Blouse item', async () => {

      await browser.goToPage(rootURL);
      await browser.driver.sleep(5000);
      await browser.enterDataAndClick(pageLocators.getHomePage().searchBox, "Blouse", pageLocators.getHomePage().searchButton);
      await browser.driver.sleep(500);
      expect(await browser.getText(pageLocators.getSearchPage().paragraph)).toEqual("1 result has been found.");
      await browser.click(pageLocators.getSearchPage().productUrl);
      await browser.driver.sleep(500);
      expect(await browser.getText(pageLocators.getSearchPage().productTitle)).toEqual("Blouse");
      await browser.driver.sleep(500);

    });

    it('Redirecting to the Women page by clicking the Women button', async () => {

      await browser.driver.sleep(500);
      await browser.click(pageLocators.getHomePage().womenBtn);
      await browser.driver.sleep(500);
      expect(await browser.getText(pageLocators.getWomenPage().navigationText)).toEqual("Women");

    });

    it('Redirecting to the Dresses page by clicking the Dresses button', async () => {

      await browser.driver.sleep(500);
      await browser.click(pageLocators.getHomePage().dressesBtn);
      expect(await browser.getText(pageLocators.getDressesPage().navigationText)).toEqual("DRESSES");
      await browser.driver.sleep(5000);

    });
    
    it('Redirecting to the T-shirts page by clicking the T-shirts button', async () => {

      await browser.driver.sleep(500);
      await browser.click(pageLocators.getHomePage().tshirtsBtn);
      expect(await browser.getText(pageLocators.getTshirtsPage().navigationText)).toEqual("T-shirts");
      await browser.driver.sleep(500);

    });

    it('Redirecting to the Contact us page by clicking the Contact us button', async () => {

      await browser.driver.sleep(500);
      await browser.click(pageLocators.getHomePage().contactUsBtn);
      expect(await browser.getText(pageLocators.getContactUsPage().navigationText)).toEqual("Contact");
      await browser.driver.sleep(500);

    });
  
    it('Check Newsletter option', async () => {

      await browser.driver.sleep(500);
      await browser.click(pageLocators.getHomePage().homeIcon);
      await browser.enterDataAndClick(pageLocators.getHomePage().newsletterFld, "dtzena.ahm@gmail.coo", pageLocators.getHomePage().submitNewsletterBtn);
      await browser.driver.sleep(500);
      expect(await browser.getText(pageLocators.getHomePage().alertMessageSuccess)).toEqual('Newsletter : You have successfully subscribed to this newsletter.');
      await browser.driver.sleep(500);

    });

    it('Redirecting to the Facebook page by clicking the Facebook icon', async () => {

      await browser.driver.sleep(500);
      const originalWindow = await browser.driver.getWindowHandle();
      await browser.click(pageLocators.getHomePage().facebookIcon);
      const windows = await browser.driver.getAllWindowHandles();
      windows.forEach(async (handle: any) => {
        if (handle !== originalWindow) {
          await browser.driver.switchTo().window(handle);
        }
      });
      await browser.driver.sleep(5000);
      let FacebookGroup = await browser.driver.findElement(By.className('a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg g0qnabr5')).isEnabled;
      expect(FacebookGroup).not.toBeFalsy();
      await browser.driver.sleep(500);
      await browser.driver.close();
      await browser.driver.switchTo().window(originalWindow);

    });

    it('Redirecting to the Twitter page by clicking the Twitter icon', async () => {

      await browser.driver.sleep(500);
      const originalWindow = await browser.driver.getWindowHandle();
      await browser.click(pageLocators.getHomePage().twitterIcon);
      const windows = await browser.driver.getAllWindowHandles();
      windows.forEach(async (handle: any) => {
        if (handle !== originalWindow) {
          await browser.driver.switchTo().window(handle);
        }
      });
      await browser.driver.sleep(5000);
      let twitterProf = await browser.driver.findElement(By.className('css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0')).isEnabled;
      expect(twitterProf).not.toBeFalsy();
      await browser.driver.sleep(500);
      await browser.driver.close();
      await browser.driver.switchTo().window(originalWindow);

    });

    it('Redirecting to the YouTube page by clicking the YouTube icon', async () => {

      await browser.driver.sleep(1000);
      const originalWindow = await browser.driver.getWindowHandle();
      await browser.click(pageLocators.getHomePage().youtubeIcon);
      const windows = await browser.driver.getAllWindowHandles();
      windows.forEach(async (handle: any) => {
        if (handle !== originalWindow) {
          await browser.driver.switchTo().window(handle);
        }
      });
      await browser.driver.sleep(10000);
      let twitterLogo = await browser.driver.findElement(By.id('logo')).isEnabled;
      expect(twitterLogo).not.toBeFalsy();
      await browser.driver.sleep(500);
      await browser.driver.close();
      await browser.driver.switchTo().window(originalWindow);

    });

  });  

  describe('Tests- Authentication page', () => {
    
    it('Check sign up and sign out option', async () => {

      await browser.driver.sleep(500);
      await browser.click(pageLocators.getHomePage().signInBtn);
      await browser.driver.sleep(1000);
      await browser.enterDataAndClick(pageLocators.getAuthenticationPage().accountEmail, 'dzeneta.ahmi@gmail.cll', pageLocators.getAuthenticationPage().submitEmailBtn);
      await browser.driver.sleep(5000);
      await browser.signUpToPage('Dzeneta', 'Ahmic', '12345', 'Ive Andrica bb', 'Miami', 'Ive Andrica bb', '00000', '123 123 123');
      expect(await browser.getText(pageLocators.getUserPage().navigationText)).toEqual("My account");
      await browser.click(pageLocators.getUserPage().logOutBtn);
      await browser.driver.sleep(500);
      expect(await browser.getText(pageLocators.getAuthenticationPage().navigationText)).toEqual("Authentication");

    });

  });
  
  describe('Tests- Ordering products', () => {

    it('Logged user is able to make successful order of items', async  () =>{

      await browser.driver.sleep(1000);
      await browser.click(pageLocators.getHomePage().signInBtn);
      await browser.loginToPage('dzeny.ahmic@gmail.com', '12345');
      await browser.click(pageLocators.getHomePage().tshirtsBtn);
      await browser.click(pageLocators.getTshirtsPage().productLink);
      await browser.click(pageLocators.getTshirtsPage().addToCartBtn);
      await browser.click(pageLocators.getHomePage().cartLink);
      await browser.click(pageLocators.getCartPage().checkOutBtn);
      await browser.click(pageLocators.getAddressesPage().checkOutBtn);
      await browser.click(pageLocators.getPaymentPage().serviceCheckBox);
      await browser.click(pageLocators.getPaymentPage().checkOutBtn);
      await browser.driver.sleep(1000);
      await browser.click(pageLocators.getPaymentPage().payByCheckBtn);
      await browser.driver.sleep(1000);
      await browser.click(pageLocators.getPaymentPage().confirmBtn);
      await browser.driver.sleep(1000);
      expect(await browser.getText(pageLocators.getPaymentPage().paragraph)).toEqual("Your order on My Store is complete.");
      var result = await browser.getText(pageLocators.getHomePage().cartText);
      expect(result).toEqual("(empty)");
      await browser.driver.sleep(500);  

    });

  });
    
  afterAll(() => {
    browser.driver.quit();
  });

});

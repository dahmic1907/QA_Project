jest.setTimeout(100000);
const { Builder, By, Key, until } = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const { isAwaitExpression } = require('typescript');
require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver');


const rootURL = 'http://automationpractice.com/index.php';
let driver = new Builder().forBrowser('chrome').build();
//const waitUntilTime = 20000;
  it('waits for the driver to start', () => {
    return driver.then((_d: any) => {
      driver = _d
    })
  })
  it('initialises the context', () => {
     driver.manage().window().setPosition(0, 0);
     driver.manage().window().setSize(1050, 1024);
     driver.get(rootURL);
  })
  describe('Tests - home page', () => {
    /*afterEach(() => {
       driver.sleep(500);
       driver.findElement(By.className('icon-home')).click();
    });*/
    it('User searches for a blouse', async  () =>{
      await driver.sleep(5000);
      let searchBox = await driver.findElement(By.name('search_query'));
      let searchButton = await driver.findElement(By.name('submit_search'));
      await searchBox.sendKeys('Blouse');
      await searchButton.click();
      await driver.sleep(500);
      let result  = await driver.findElement(By.className('heading-counter')).getText();
      let ProductUrl = await driver.findElement(By.className('product_img_link'));
      await ProductUrl.click();
      var productTitle = await driver.findElement(By.css('h1')).getText();
      expect(result).toEqual("1 result has been found.");
      expect(productTitle).toEqual("Blouse");
      await driver.sleep(500);
    })
    
    it('Redirected to the Women page by clicking the Women button', async  () =>{
      await driver.sleep(500);
      let WomenButton = await driver.findElement(By.className('sf-with-ul'));
      await WomenButton.click();
      let result = await driver.findElement(By.className('navigation_page')).getText();
      expect(result).toEqual("Women");
      await driver.sleep(500);
    })
    it('Redirected to the Contact us page by clicking the Contact us button', async  () =>{
      await driver.sleep(500);
      let ContactUs = await driver.findElement(By.id('contact-link'));
      ContactUs.click();
      let rezalt = await driver.findElement(By.className('navigation_page')).getText();
      expect(rezalt).toEqual("Contact");
      await driver.sleep(5000);  
    })
    
    /*it('Redirected to the Dresses page by clicking the Dresses button', async  () =>{
      await driver.sleep(500);
      let dressesBtn = await driver.findElement(By.className('sfHoverForce'));
      await dressesBtn.click();
      let result = await driver.findElement(By.className('navigation_page')).getText();
      expect(result).toEqual("Dresses");
      await driver.sleep(5000);  
    })*/
    it('Check Newsletter option', async  () =>{
      await driver.sleep(500);
      await driver.findElement(By.className('icon-home')).click();
      await driver.findElement(By.id('newsletter-input')).sendKeys('dzeny.ahmic@hotmail.www',  Key.ENTER);
      var result = await driver.findElement(By.className('alert alert-success')).getText();
      expect(result).toEqual('Newsletter : You have successfully subscribed to this newsletter.');
      await driver.sleep(1000);
    })
    it('Redirected to the Facebook page by clicking the Facebook icon', async  () =>{
      await driver.sleep(500);
      const originalWindow = await driver.getWindowHandle();
      let FacebookBtn = await driver.findElement(By.className('facebook'));
      await FacebookBtn.click();
      const windows = await driver.getAllWindowHandles();
      windows.forEach(async (handle: any) => {
        if (handle !== originalWindow) {
          await driver.switchTo().window(handle);
        }
      });
      await driver.sleep(5000);
      let FacebookGroup = await driver.findElement(By.className('oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gmql0nx0 gpro0wi8 hnhda86s')).isEnabled;
      expect(FacebookGroup).not.toBeFalsy();
      await driver.sleep(500);
      await driver.close();
      await driver.switchTo().window(originalWindow);
    });

    it('Redirected to the Twitter page by clicking the Twitter icon', async  () =>{
      await driver.sleep(500);
      const originalWindow = await driver.getWindowHandle();
      let TwitterBtn = await driver.findElement(By.className('twitter'));
      await TwitterBtn.click();
      const windows = await driver.getAllWindowHandles();
      windows.forEach(async (handle: any) => {
        if (handle !== originalWindow) {
          await driver.switchTo().window(handle);
        }
      });
      await driver.sleep(5000);
      let twitterLogo = await driver.findElement(By.className('r-1cvl2hr r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp')).isEnabled;
      expect(twitterLogo).not.toBeFalsy();
      await driver.sleep(500);
      await driver.close();
      await driver.switchTo().window(originalWindow);
    });

    it('Redirected to the YouTube page by clicking the YouTube icon', async  () =>{
      await driver.sleep(1000);
      const originalWindow = await driver.getWindowHandle();
      let youtubeBtn = await driver.findElement(By.className('youtube'));
      await youtubeBtn.click();
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
    await driver.findElement(By.className('login')).click();
    await driver.findElement(By.id('email_create')).sendKeys('dahmic@hotmail.www');
    await driver.findElement(By.id('SubmitCreate')).click();
    await driver.sleep(5000);
    await driver.findElement(By.id('customer_firstname')).sendKeys('Dzeneta');
    await driver.findElement(By.id('customer_lastname')).sendKeys('Ahmic');
    await driver.findElement(By.id('passwd')).sendKeys('12345');
    await driver.findElement(By.id('address1')).sendKeys('Ive Andrica bb');
    await driver.findElement(By.id('city')).sendKeys('Miami');
    await driver.findElement(By.id('id_state')).sendKeys('Ive Andrica bb');
    await driver.findElement(By.id('postcode')).sendKeys('00000');
    await driver.findElement(By.id('phone_mobile')).sendKeys('123 123 123');
    await driver.findElement(By.id('submitAccount')).click();
    await driver.sleep(500);
    let placeholder  = await driver.findElement(By.className('navigation_page')).getText();
    expect(placeholder).toEqual("My account");
    let logOutBtn = await driver.findElement(By.className('logout'));
    let accountBtn = await driver.findElement(By.className('account')).isEnabled;
    expect(accountBtn).toBeTruthy();
    logOutBtn.click(); 
    await driver.sleep(100);
    placeholder  = await driver.findElement(By.className('navigation_page')).getText();
    expect(placeholder).toEqual("Authentication");
  })
});
afterAll(() => {
   driver.quit();
});
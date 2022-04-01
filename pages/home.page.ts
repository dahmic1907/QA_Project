require('selenium-webdriver/chrome');

const { By, Key } = require('selenium-webdriver');


export class HomePage{
   
    constructor() { }

    //#region  Locators

    homeIcon = By.className('icon-home'); 
    cartText = By.className('ajax_cart_no_product'); 
    cartLink = By.xpath('/html/body/div/div[1]/header/div[3]/div/div/div[3]/div/a'); 
    searchBox = By.name('search_query');
    searchButton = By.name('submit_search');
    womenBtn = By.className('sf-with-ul'); 
    dressesBtn = By.xpath('/html/body/div/div[1]/header/div[3]/div/div/div[6]/ul/li[2]/a');
    tshirtsBtn = By.xpath('/html/body/div/div[1]/header/div[3]/div/div/div[6]/ul/li[3]/a');
    contactUsBtn = By.id('contact-link'); 
    signInBtn = By.className('login'); 
    newsletterFld = By.id('newsletter-input');
    submitNewsletterBtn = By.xpath('//*[@id="newsletter_block_left"]/div/form/div/button');
    facebookIcon = By.className('facebook');
    twitterIcon = By.className('twitter');
    youtubeIcon = By.className('youtube');
    alertMessage = By.className('alert alert-success');

    //#endregion Locators
    
}

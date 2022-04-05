import { AddressesPage } from "./pages/addresses.page";
import { HomePage } from "./pages/home.page";
import { CartPage } from "./pages/cart.page";
import { SearchPage } from "./pages/search.page";
import { ContactUsPage } from "./pages/contactus.page";
import { UserAccountPage } from "./pages/user.page";
import { WomenPage } from "./pages/women.page";
import { TshirtsPage } from "./pages/tshirts.page";
import { PaymentPage } from "./pages/payment.page";
import { DressesPage } from "./pages/dresses.page";
import { AuthenticationPage } from "./pages/authentication.page";

export class GetPageLocators {

    constructor() {
    }

    public getHomePage(){
        return new HomePage();
    }
    public getCartPage(){
        return new CartPage();
    }

    public getSearchPage(){
        return new SearchPage();
    }

    public getContactUsPage(){
        return new ContactUsPage();
    }

    public getUserPage(){
        return new UserAccountPage();
    }

    public getWomenPage(){
        return new WomenPage();
    }

    public getTshirtsPage(){
        return new TshirtsPage();
    }

    public getPaymentPage(){
        return new PaymentPage();
    }

    public getDressesPage(){
        return new DressesPage();
    }

    public getAuthenticationPage(){
        return new AuthenticationPage();
    }

    public getAddressesPage(){
        return new AddressesPage();
    }    

}

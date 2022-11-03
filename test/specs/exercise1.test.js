/* ----------------------------- DEPENDENCIES ----------------------------- */
import { TEST_DATA } from "../testData/data.js";
var home = require('../pages/Home');
var createAccount = require('../pages/CreateAccount');
/* -------------------------------------------------------------------------- */

const signInBtn = "//a[contains(text(),'Sign in')]";

describe("Create a new profile", () => {
  
    it("Access the website's home page", () => {
        browser.url(TEST_DATA.USER.DEFAULT.url);
    });
  
    it("Check if the page title is 'My Store'", () => {
        expect(browser).toHaveTitle(TEST_DATA.USER.DEFAULT.pageTitle_home);
    });

    it("Check if the page address is 'http://automationpractice.com/index.php'", () => {
        expect(browser).toHaveUrl(TEST_DATA.USER.DEFAULT.url);
    });

    it("Click 'sign in'", () => {
        /* $(signInBtn).click(); */
        /* home.clickSignIn(); */
        home.clickBtn('Sign in');
    });

    it("Check if the URL contains 'controller=authentication' parameter", () => {
        expect(browser).toHaveUrlContaining(TEST_DATA.USER.DEFAULT.url_auth);
    });

    it("Under 'CREATE AN ACCOUNT' section, fill out your email address", () => {
        $(createAccount.emailField).setValue('douglas.davila@objectedge.com');
        createAccount.getUserEmail();
    });

    it("Click 'Create an account'", () => {
        $(createAccount.createAccBtn).click();
    });

    it("Check if H1 page title is 'CREATE AN ACCOUNT'", () => {
        expect($('//h1')).toHaveText('CREATE AN ACCOUNT');
    });

    it("Fill out all mandatory fields for account creation", () => {
        createAccount.fillPersonalInformation('m','Douglas','Davila','123123123',4,11,'1990',true,false);
    });

    it("Check if 'First name' and 'Last name' fields are already populated", () => {
        createAccount.assertUserEmail();
    });
    
    it("Fill out the remaining fields", () => {
        createAccount.fillYourAddress();
    });
    
    it("Click 'Register'.", () => {
        $(createAccount.registerBtn).click();
    });
    
    it("Check if the page has 'controller=my-account' as its parameter", () => {
        expect(browser).toHaveUrlContaining(TEST_DATA.USER.DEFAULT.url_myAccount);
    });
    
    it("Check if the page has 'My account - My Store' as its title", () => {
        expect(browser).toHaveTitle(TEST_DATA.USER.DEFAULT.pageTitle_myAccount);
    });
    
    it("Log out by clicking 'Sign out' button, on the header.", () => {
        home.clickBtn('Sign out');
    });

});
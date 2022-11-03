/* ----------------------------- DEPENDENCIES ----------------------------- */
import { TEST_DATA } from "../testData/data.js";
var home = require('../pages/Home');
var createAccount = require('../pages/CreateAccount');
/* -------------------------------------------------------------------------- */

const signInBtn = "//a[contains(text(),'Sign in')]";
var runningValue = 16;

describe("Create a new profile", () => {
  
    it("Access the website's home page", () => {
        browser.url(TEST_DATA.USER.DEFAULT.url); //importing url value from data file
    });
  
    it("Check if the page title is 'My Store'", () => {
        expect(browser).toHaveTitle(TEST_DATA.USER.DEFAULT.pageTitle_home); //importing page title value from data file
    });

    it("Check if the page address is 'http://automationpractice.com/index.php'", () => {
        expect(browser).toHaveUrl(TEST_DATA.USER.DEFAULT.url); //importing url value from data file
    });

    it("Click 'sign in'", () => {
        /* $(signInBtn).click(); */ //local constant value
        /* home.clickSignIn(); */ //page-object function
        home.clickBtn('Sign in'); //page-object generic click function
    });

    it("Check if the URL contains 'controller=authentication' parameter", () => {
        expect(browser).toHaveUrlContaining(TEST_DATA.USER.DEFAULT.url_auth); //importing url parameter from data file
    });

    it("Under 'CREATE AN ACCOUNT' section, fill out your email address", () => {
        $(createAccount.emailField).setValue('douglas.davila+'+runningValue+'@objectedge.com'); //'hardcoded' email value 
        createAccount.getUserEmail(); //importing function from page-object to store user email typed
    });

    it("Click 'Create an account'", () => {
        $(createAccount.createAccBtn).click(); //importing create account btn selector from page-object
    });

    it("Check if H1 page title is 'CREATE AN ACCOUNT'", () => {
        expect($('//h1')).toHaveText('CREATE AN ACCOUNT'); //'hardcoded' selector to check if element has specific text
    });

    it("Fill out all mandatory fields for account creation", () => {
        createAccount.fillPersonalInformation('m','Douglas','Davila','123123123',4,11,'1990',true,false); //importing function from page-object to fill first part of account creation page
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
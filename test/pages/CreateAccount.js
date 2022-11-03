import { TEST_DATA } from "../testData/data.js";

var userEmail;
export const emailField = "//input[@id='email_create']";
export const createAccBtn = "//button[@id='SubmitCreate']";
const title1 = "//input[@id='id_gender1']";
const title2 = "//input[@id='id_gender2']";
const firstName = "//input[@id='customer_firstname']";
const lastName = "//input[@id='customer_lastname']";
const email = "//input[@id='email']";
const password = "//input[@id='passwd']";
const birthDay = "//select[@id='days']";
const birthMonth = "//select[@id='months']";
const birthYear = "//select[@id='years']";
const newsletter = "//input[@id='newsletter']";
const specOffers = "//input[@id='optin']";
const address = "//input[@id='address1']";
const city = "//input[@id='city']";
const state = "//select[@id='id_state']";
const zip = "//input[@id='postcode']";
const country = "//select[@id='id_country']";
const phoneMobile = "//input[@id='phone_mobile']";
export const registerBtn = "//button[@id='submitAccount']";

export function getUserEmail() {
    userEmail = $(emailField).getValue();
}

export function fillPersonalInformation(gender, fName, lName, pw, dBirth, mBirth, yBirth, newsL, spOf ) {
    if (gender == 'male' || gender == 'm') {
        $(title1).click();
    } else {
        $(title2).click();
    }
    $(firstName).setValue(fName);
    $(lastName).setValue(lName);
    $(password).setValue(pw);
    $(birthDay).selectByAttribute('value', dBirth);
    $(birthMonth).selectByAttribute('value', mBirth);
    $(birthYear).selectByAttribute('value', yBirth);
    if (newsL == true) {
        $(newsletter).click();
    }
    if (spOf == true) {
        $(specOffers).click();
    }
}

export function fillYourAddress() {
    $(address).setValue(TEST_DATA.USER.DEFAULT.address);
    $(city).setValue(TEST_DATA.USER.DEFAULT.city);
    $(state).click();
    $(state).selectByVisibleText(TEST_DATA.USER.DEFAULT.state);
    $(zip).setValue(TEST_DATA.USER.DEFAULT.zip);
    $(country).selectByVisibleText(TEST_DATA.USER.DEFAULT.country);
    $(phoneMobile).setValue(TEST_DATA.USER.DEFAULT.phone);
}

export function assertUserEmail() {
    expect($(email)).toHaveValue(userEmail);
}




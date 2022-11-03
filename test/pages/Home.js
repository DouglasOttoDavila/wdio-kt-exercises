import { TEST_DATA } from "../testData/data.js";

const signInBtn = '//a[contains(text(),"Sign in")]';
const signOutBtn = '//a[contains(text(),"Sign out")]';

export function clickSignIn() {
    $(signInBtn).click();
}

export function clickBtn(btnText) {
    var selector = '//a[contains(text(),"'+btnText+'")]';
    $(selector).click();
}



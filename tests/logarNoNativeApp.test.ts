/// <reference types="mocha" />
import LoginPage from "../screen/login.page"
import { $, $$, browser, driver, expect } from '@wdio/globals';
import users from '../data/users.json';

describe("Native APP", function () {
	
  it("Login no Native App", async function () {
     await LoginPage.logarNoNativeApp(users.validUser.email, users.validUser.password)

    // validação após login
    const homeScreen = await $('~home-screen')
    await homeScreen.waitForDisplayed()
  })
  
})
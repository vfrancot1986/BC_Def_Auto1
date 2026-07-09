/// <reference types="mocha" />
import LoginPage from "../screen/login.page"
import { $, $$, browser, driver, expect } from '@wdio/globals';

describe("Native APP", function () {
	
  it("Login no Native App", async function () {
     await LoginPage.logarNoNativeApp('teste@email.com', 'MinhaSenha123')

    // validação após login
    const homeScreen = await $('~home-screen')
    await homeScreen.waitForDisplayed()
  })
  
})
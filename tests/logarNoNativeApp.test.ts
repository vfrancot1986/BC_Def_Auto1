/// <reference types="mocha" />
import LoginPage from "../screen/login.page"
import HomePage from "../screen/home.page"
import { $, $$, browser, driver, expect } from '@wdio/globals';
import { testData } from '../data/users.json';

describe("Native APP", function () {

  testData.forEach((user) => {

    it("Login no Native App", async function () {

      await LoginPage.logarNoNativeApp(user.email, user.password);

      if (user.shouldSucceed) {
            await expect(HomePage.isLoggedIn()).resolves.toBe(true);
          } else {
            await expect(HomePage.isErrorVisible()).resolves.toBe(true);
          }
    })
  })
})
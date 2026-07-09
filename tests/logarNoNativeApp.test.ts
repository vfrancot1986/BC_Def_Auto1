/// <reference types="mocha" />
import LoginPage from "../screen/login.page"
import HomePage from "../screen/home.page"
import { $, $$, browser, driver, expect } from '@wdio/globals';
import { testData } from '../data/users.json';
import allure from '@wdio/allure-reporter';

describe("Native APP", function () {

  testData.forEach((user) => {

    allure.addFeature('Login');
    allure.addSeverity('critical');
    allure.addDescription(`Teste de login com usuário: ${user.email} e senha: ${user.password}`);
    allure.startStep('Realizar login');

    it("Login no Native App", async function () {

      await LoginPage.logarNoNativeApp(user.email, user.password);
      allure.endStep();
      if (user.shouldSucceed) {
            allure.startStep('Validar login com sucesso');
            await expect(HomePage.isLoggedIn()).resolves.toBe(true);
            
          } else {
            allure.startStep('Validar erro no login');
            await expect(HomePage.isErrorVisible()).resolves.toBe(true);
          }
      allure.endStep();
    })
  })
})
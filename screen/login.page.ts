declare const driver: import('webdriverio').Browser;

class LoginPage {

    private SELECTORS = {
        logar: {
            android: 'android=new UiSelector().text("Login")',
            ios: '~Login'
        },
        email: {
            android: '~input-email',
            ios: '~input-email'
        },
        senha: {
            android: '~input-password',
            ios: '~input-password'
        },
        btnLogin: {
            android: 'android=new UiSelector().text("LOGIN")',
            ios: '~button-LOGIN'
        }
    }

    private getSelector(element: keyof typeof this.SELECTORS) {
        return driver.isAndroid
            ? this.SELECTORS[element].android
            : this.SELECTORS[element].ios;
    }

    public async logarNoNativeApp(usuario: string, senha: string) {

        await driver.pause(5000);

        const logar = await driver.$(this.getSelector('logar'));
        await logar.click();

        const inputEmail = await driver.$(this.getSelector('email'));
        await inputEmail.addValue(usuario);

        const inputPassword = await driver.$(this.getSelector('senha'));
        await inputPassword.addValue(senha);

        const loginButton = await driver.$(this.getSelector('btnLogin'));
        await loginButton.click();
    }
}
export default new LoginPage()

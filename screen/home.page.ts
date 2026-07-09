declare const driver: import('webdriverio').Browser;

class HomePage {

    private SELECTORS = {
        tituloHome: {
            android: 'android=new UiSelector().text("Home")',
            ios: '~Home'
        },
        mensagemErro: {
            android: 'android=new UiSelector().textContains("invalid")',
            ios: '~error-message'
        }
    };

    private getSelector(element: keyof typeof this.SELECTORS) {
        return driver.isAndroid
            ? this.SELECTORS[element].android
            : this.SELECTORS[element].ios;
    }

    public async isLoggedIn(): Promise<boolean> {
        const homeTitle = await driver.$(this.getSelector('tituloHome'));
        try {
            await homeTitle.waitForDisplayed({ timeout: 10000 });
            return true;
        } catch (error) {
            return false;
        }
    }

    public async isErrorVisible(): Promise<boolean> {
        const errorMessage = await driver.$(this.getSelector('mensagemErro'));
        try {
            await errorMessage.waitForDisplayed({ timeout: 10000 });
            return true;
        } catch (error) {
            return false;
        }
    }   
}
export default new HomePage();

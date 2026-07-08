declare const driver: import('webdriverio').Browser;

class LoginPage {

    public async logarNoNativeApp (usuario: string, senha: string) {

        await driver.pause(5000);
        const logar = await driver.$("accessibility id:Login");
        await logar.click();
        const inputEmail = await driver.$("accessibility id:input-email");
        await inputEmail.addValue(usuario);
        const inputPassword = await driver.$("accessibility id:input-password");
        await inputPassword.addValue(senha);
        const loginButton = await driver.$("accessibility id:button-LOGIN");
        await loginButton.click();
        
    }
}
export default new LoginPage()

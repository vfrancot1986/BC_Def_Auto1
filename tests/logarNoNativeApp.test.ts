/// <reference types="mocha" />
import LoginPage from '../screen/login.page'

describe('Native APP', function () {
    
    it('Login no Native App', async function () {
        await LoginPage.logarNoNativeApp('usuario', 'senha');
    })
})
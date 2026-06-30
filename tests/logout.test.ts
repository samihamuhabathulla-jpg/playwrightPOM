import { test, expect } from '../fixtures/baseFixture';
import loginData from '../test-data/loginData.json';

test.describe('Logout Tests', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigate();

        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );
    });

    test('Logout Successfully', async ({ loginPage, dashboardPage }) => {

        await dashboardPage.logout();
        await expect(loginPage.loginTitle).toHaveText('Login');
    });

});
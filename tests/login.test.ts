import { test, expect } from '../fixtures/baseFixture';
import loginData from '../test-data/loginData.json';

test.describe('Login Tests', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigate();
    });

    test('Valid Login', async ({ loginPage, dashboardPage }) => {

        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );

        await expect(dashboardPage.dashboardTitle).toHaveText('Dashboard');
    });

    test('Invalid Login', async ({ loginPage }) => {

        await loginPage.login(
            loginData.invalidUser.username,
            loginData.invalidUser.password
        );

        await expect(loginPage.errorMessage).toHaveText('Invalid credentials');
    });

});
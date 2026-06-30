import { Page, Locator } from '@playwright/test';

export class DashboardPage {
    readonly page: Page;
    readonly dashboardTitle: Locator;
    readonly quickLaunch: Locator;
    readonly timeAtWorkCard: Locator;
    readonly profileMenu: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page) {
        this.page = page;

        this.dashboardTitle = page.locator('h6');
        this.quickLaunch = page.getByText('Quick Launch');
        this.timeAtWorkCard = page.getByText('Time at Work');
        this.profileMenu = page.locator('.oxd-userdropdown-tab');
        this.logoutLink = page.locator('text=Logout');
    }

    async logout() {
        await this.profileMenu.click();
        await this.logoutLink.click();
    }
}
class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = "//input[@name='username']";
        this.passwordInput = "//input[@name='password']";
        this.loginButton = "//button[@type='submit']";
    }

    async navigateToLoginPage() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async login(username, password) {
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
        // Wait for navigation
        await this.page.waitForURL('**/dashboard/index');
    }
}

module.exports = LoginPage;
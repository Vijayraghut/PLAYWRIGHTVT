const { test, expect } = require('@playwright/test');
const LoginPage = require('../pageobjects/LoginPage');
const BuzzPage = require('../pageobjects/BuzzPage');

test.describe('Orange HRM Buzz Functionality', () => {
    let loginPage;
    let buzzPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        buzzPage = new BuzzPage(page);
    });

    test('Create and verify buzz post', async ({ page }) => {
        // 1. Navigate to login page
        await loginPage.navigateToLoginPage();
        
        // 2. Login as Admin
        await loginPage.login('Admin', 'admin123');
        
        // 3. Navigate to Buzz page
        await buzzPage.navigateToBuzz();
        
        // 4. Create a post
        const testMessage = `Test post ${Date.now()}`;
        await buzzPage.createPost(testMessage);
        
        // 5. Verify the posted message
        const postedMessage = await buzzPage.getLatestPostText();
        expect(postedMessage.trim()).toContain(testMessage);
    });
});
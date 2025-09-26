const { test, expect } = require('@playwright/test');

test('Verify selectorshub page elements and fill form', async ({ page }) => {
    // Launch URL
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    
    // Verify header text - using a more specific selector
    const header = page.locator('.entry-title');
    await expect(header).toBeVisible();
    await expect(header).toContainText('XPath & cssSelector Practice Page');
    
    // Verify logo - using a more specific selector
    const logo = page.locator('img.custom-logo');
    await expect(logo).toBeVisible();
    
    // Wait for form to be visible and interactive
    await page.waitForSelector('input[name="email"]');
    
    // Fill user details with better selectors and waiting
    await page.locator('#userId').fill('tester@gmail.com');
    await page.locator('#pass').fill('Vijay@8500');
    await page.locator('input[name="company"]').fill('open Ai tech');
    await page.locator('input[name="mobile number"]').fill('9876543210');
    await page.locator('#country').fill('India');
    
    // Click submit button - using a more specific selector
    await page.locator('input.submit-btn').click();
    
    // Wait for submission feedback
    await page.waitForTimeout(2000);
});
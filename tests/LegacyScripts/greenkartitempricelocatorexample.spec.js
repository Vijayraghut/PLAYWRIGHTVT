const { test, expect } = require('@playwright/test');

test.describe('GreenKart Item Price Locator', () => {
    test('should locate item price correctly', async ({ page }) => {
        await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/")
        

    // consistant locator for broccolli price it will never change even if the item position also change
    // "//h4[text()='Brocolli - 1 Kg']/../p"
        const price = await page.locator("//h4[text()='Brocolli - 1 Kg']/../p").textContent();
        console.log(price)

    });
});
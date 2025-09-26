import { test, expect } from '@playwright/test';


    test(`greencart add to cart to the items`,{tag:"@smoke"},async ({ page }) => {
        

        await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')

        const addToCartButtons = await page.locator("//button[text()='ADD TO CART']");
        const count = await addToCartButtons.count();
        for (let i = 0; i < count; i++) {
            await addToCartButtons.nth(i).click();
        }

    });




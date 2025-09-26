import { test, expect } from '@playwright/test';

test('based on visibilt run different script', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/disappearing_elements')

    const gallery = page.locator('a[href="/gallery/"]')
    const portfolio = page.locator('a[href="/portfolio/"]')

    if (await gallery.isVisible()){

        await gallery.click()
        await expect(page).toHaveURL("https://the-internet.herokuapp.com/gallery/")
        await expect (page.locator("//h1[text()='Not Found']")).toBeVisible();

    }

    else{
       await portfolio.click()

       await expect (page).toHaveURL("https://the-internet.herokuapp.com/portfolio/")
       await expect(page.locator("//h1[text()='Not Found']")).toBeVisible();

    }
})
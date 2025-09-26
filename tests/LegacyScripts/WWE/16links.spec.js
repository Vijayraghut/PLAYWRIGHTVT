const { test, expect } = require('@playwright/test');

test.describe('Automation - Working With Elements', () => {
    
     test('Links -example ', async ({ page }) => {

         await page.goto('https://trello.com/')

         await page.click("//a[text()='Log in']")
         await page.getByTestId('username').fill("rajutester2673@gmail.com")


     })

    test('Links -example2 ', async ({ page }) => {

        await page.goto('https://www.wikipedia.org/')

        await expect(page.locator("//a")).toHaveCount(371)

         //await page.locator('[data-jsl10n="commons.name"]').click()

        // or 

        await page.click('[data-jsl10n="commons.name"]')
      
        await page.waitForTimeout(5000) // Halt execution for 5 sec 

        await expect(page).toHaveURL('https://commons.wikimedia.org/wiki/Main_Page')
        await page.goBack() // Navigate Back to previous 

        await page.locator("//span[text()='Wikivoyage']").click()
        await page.waitForTimeout(5000)
        await expect(page).toHaveURL('https://www.wikivoyage.org')
        await page.goBack()

        await page.waitForTimeout(5000)

        await page.goForward() //Navigate forward to previous  

    })

})

/* how to find the whether the link is correct link or broken/Bad link first we have to send the request
with the links href value if the response will be 200 it is correct link otherwise ehich is briken link


// request.get("href")

// 200 */
const { test, expect } = require('@playwright/test');

test('Working with Radio button - example', async ({ page }) => {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

    // male radio button should be checked 
    await expect(page.locator('input[value="m"]')).toBeChecked()
    
    // female radio button should not be checked when we open the page
    await expect(page.locator('input[value="f"]')).not.toBeChecked()

    // i want to check female radio button
    await page.locator('input[value="f"]').check()

    // male radio button should not be checked aftre checked the female one
    await expect(page.locator('input[value="m"]')).not.toBeChecked()

    // female radio button should be checked 
    await expect(page.locator('input[value="f"]')).toBeChecked()

    const isChecked = await page.locator('input[value="f"]').isChecked() // true / false

    console.log(isChecked)

    await page.waitForTimeout(5000)

})


test('Working with Radio button - example 2', async ({ page }) => {

    await page.goto('https://demo.guru99.com/test/radio.html')
    
    await page.locator('input[value="Option 2"]').check()

  //  await page.locator('input[value="Option 2"]').uncheck()  //it will not work for radiobutton

    await page.waitForTimeout(5000)

})
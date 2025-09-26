const { browser, test, expect } = require('@playwright/test');

// Example for work with single checkbox?

test("Check box Example", async ({ page }) => {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')


    const checked = await page.locator('//input[@type="checkbox"]').isChecked()

    // checked = false ("isChecked()" will give true/fslse if checked it will give true if not false )

    console.log(checked)

    if (!checked) {

        await page.locator('//input[@type="checkbox"]').check()
    }

    await expect(page.locator('//input[@type="checkbox"]')).toBeChecked()
    // .toBeChecked()-is a Assertion 
    // which is used to verify whether the checkbox is properly "checked" or not

    await page.waitForTimeout(4000)

    await page.locator('//input[@type="checkbox"]').uncheck()

    await expect(page.locator('//input[@type="checkbox"]')).not.toBeChecked()
    // .not.toBeChecked()-is a Assertion 
    // which is used to verify whether the checkbox is properly "Unchecked" or not

    await page.waitForTimeout(2000)
})



// Example for work with multiple checkbox?

test("Check box Example -2 ", async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    //    if we have multiple checkboxes we have take all the checkboxes locators in one array
    /*  const checkboxes = ["#checkBoxOption1", "#checkBoxOption2", "#checkBoxOption3"]
 
     console.log(checkboxes)
 
     //  here we loop the array with "for..of" loop
        for (let checkbox of checkboxes){
 
            await page.locator(checkbox).check()
        }
     //   after checked if you want uncheck you can uncheck also
     // here waitForTimeout(2000) is used to wait for 2 sec to uncheck after cheched
 
        await page.waitForTimeout(2000)
 
        for (let checkbox of checkboxes){
 
            await page.locator(checkbox).uncheck()
        }*/


    //   if we dont know how many checkboxes are there that time we can use "$$" instead of locator and
    //    we have to take common locator(await.page.$$("common locator"))
    // this will save all the elements in array

    const checkboxes = await page.$$("//div[@id='checkbox-example']/fieldset/label/input")

    // no need print console.log(checkboxes) also

    for (let checkbox of checkboxes) {

        await checkbox.check()   // dont need to give page.locator

    }
    await page.waitForTimeout(2000)

    for (let checkbox of checkboxes) {

        await checkbox.uncheck()
    }


})

// example for all addtocart boutto at one time

test("click all the elements", async ({ page }) =>{

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/")

    const buttons = await page.$$('//div[@class="product-action"]')
    
    for( let button of buttons){

        await button.click()

    }
    // in cypress very easy to click multiple element without using for loop
    //  // cy.get(commonloctor).click({multiple :true}) 
})


// ex


test('Working with check box - example 3', async ({ page }) => {

    await page.goto('https://demo.guru99.com/test/radio.html');


    const checkBoxes = await page.$$('[type="checkbox"]'); // ["checkbox1", "checkbox2"]

    for (let checkbox of checkBoxes) {

        const isChecked = await checkbox.isChecked(); // false 

        // Check the checkbox if it's not already checked
        if (!isChecked) {
            await checkbox.check({ force: true });
        }
    }

    await page.waitForTimeout(5000)

})
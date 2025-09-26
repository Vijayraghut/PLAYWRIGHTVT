import { test, expext } from '@playwright/test';

test('check box example', async ({ page }) => {


    // object
    /*const creds ={
        url: "https://register.rediff.com/register/register.php?FormName=user_details"
    }

    await page.goto(creds.url)*/


     await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

    //  ischecked() is the method for statusbox checked (if checked it will give true if not checked it will give you false)


     await page.locator('//input[@type="checkbox"]').check()

    let checkboxStatus = await page.locator('//input[@type="checkbox"]').isChecked()

    console.log(checkboxStatus)  // true


    if(checkboxStatus){

        await page.locator('//input[@type="checkbox"]').isChecked()

        console.log(" the check box is checked")
    }

    else{

        console.log(" the check box is not checked")
    }


})  // here the condition is true so the "if statement" is executed



test('conditional checkbox', async ({ page }) => {
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details');

    let checkboxStatus = await page.locator('//input[@type="checkbox"]').uncheck()

    if (checkboxStatus) {
        await page.locator('//input[@type="checkbox"]').isChecked()
        console.log('Checkbox already checked, skipping...');
    }

    else {
        await page.locator('//input[@type="checkbox"]')
        console.log('Checkbox checked');
    }

});   // here condtion is false so the "else statement" is executed



test('checkbox another way example', async ({ page }) => {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details');



    const checkbox = await page.locator('//input[@type="checkbox"]')

     await checkbox.check();
    const checkboxStatus = await checkbox.isChecked();
    // above line and this one is same (...const checkboxStatus = await page.locator('//input[@type="checkbox"]').uncheck()...)

    if (checkboxStatus) {

    console.log('Checkbox is already checked');
    // If needed, you can uncheck it here

      //await checkbox.uncheck();

    }

    else {
    console.log('Checkbox is not checked');
    //await checkbox.check();
  }

})



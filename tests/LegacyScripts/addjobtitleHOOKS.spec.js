import { test, expect } from '@playwright/test';

import jobtitledata from "../../TestData/addjobtitle.json";

let page;
test.beforeEach(async({browser})=>{
 page = await browser.newPage()



    //    test.setTimeout(60000)
    // Navigate to the application
    await page.goto('/web/index.php/auth/login');

    console.log("Launching the application")
    // Enter username and password
    await page.locator("input[name='username']").fill("Admin")
    console.log("Entering username")

    await page.locator("input[type='password']").fill("admin123")
    console.log("Entering password")

    //click on login button

    await page.locator("button[type='submit']").click()
    console.log("Clicking on login button ")

    // Verify that the user is redirected to the dashboard page

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index', { timeout: 15000 });

    await expect(page.locator('ul[class="oxd-main-menu"]')).toBeVisible()
    // click on the admin module
    await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();

    //clcik on the Job

    await page.locator("//li[contains(.,'Job')]").click();

    //click on the job title

    await page.locator("//a[normalize-space(text())='Job Titles']").click();

    // click on the add button 

    await page.locator("//button[contains(.,'Add')]").click();


    // await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle');


});


test.afterEach(async () => {

    // Close the browser
    await page.close();
    console.log("Closing the browser")



})

test(`Verify Add Job title with mandatory fields`,{tag:"@smoke"}, async ({  }) => {



  let randomchars = (Math.random() + 1).toString(36).substring(7);
  console.log(randomchars)

  //  const random5Char = Math.random().toString(36).substring(2, 7); // 5 chars

  await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(jobtitledata.Jobtitle+randomchars)

  await page.locator('(//textarea[@class="oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical"])[1]').fill(jobtitledata.job_description)

  // await page.locator('input[type="file"]').setInputFiles("./testdata/files/Gemini_Generated_Image.png")
  await page.locator("//button[@type='submit']").click()

  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")

})

test("Verify Error message for mandatory fields ", async ({ }) => {


  await page.locator("//button[@type='submit']").click()

  await expect.soft()(page.locator("//span[text()='Required']")).toBeVisible();

  await expect.soft()(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle')

})


test("Verify Add Job title fields max chars limit ", async ({  }) => {

 
  await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill("jobtitledataJobtitlerandomcharsadrftgyhuifufyjvhevzfguihjgrfbihljbgroiluk,jfghjzbgvbbv,m.dlkjilhvbkmcvzldj;dn.jg")

  await expect.soft()(page.locator("//span[text()='Should not exceed 100 characters']")).toBeVisible();
  
  await page.locator("//button[@type='submit']").click()

  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle')

})
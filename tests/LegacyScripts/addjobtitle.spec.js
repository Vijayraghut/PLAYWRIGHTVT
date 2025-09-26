import { test, expect } from '@playwright/test';

import jobtitledata from "../../TestData/addjobtitle.json";

test("Verify Add Job title ", async ({ page }) => {

  const  x= "ViJay"

  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();

  //Verification 
  //Assertions 
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible(); // 5 sec 

  await expect(page).toHaveURL('/web/index.php/dashboard/index')

  await page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]').click()

  await page.locator('(//span[@class="oxd-topbar-body-nav-tab-item"])[2]').click()

  await page.locator('(//a[@role="menuitem"])[1]').click()

  await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

  let randomchars = (Math.random() + 1).toString(36).substring(7);
  console.log(randomchars)

  await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(jobtitledata.Jobtitle+randomchars)

  await page.locator('(//textarea[@class="oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical"])[1]').fill(jobtitledata.job_description)

  await page.locator("//button[@type='submit']").click()

  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')

})
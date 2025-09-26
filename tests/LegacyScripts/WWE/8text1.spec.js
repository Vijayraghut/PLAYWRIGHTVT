
// const{ test, expect } = require('@playwright/test')
import { test, expect } from '@playwright/test'

test.describe('Text2 Suite', () => {
    test('sample test', async ({ page }) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        const textvalue1 = await page.locator('(//p[@class="oxd-text oxd-text--p"])[1]').innerText() 

        // “Instead of the innerText() method, we can use the textContent() method; both will do a similar job
        console.log(textvalue1)
        
        await expect(textvalue1).toBe('Username : Admin')   // to veriy the text 

        const textvalue2 = await page.locator('(//p[@class="oxd-text oxd-text--p"])[2]').innerText()

        console.log(textvalue2)

         await expect(textvalue2).toBe('Password : admin123')  // verify the text

         //otherwise instead of above 6 lines we can write in simple 2 lines with "toHaveText("required text")" method.
         //this one is better

         await expect(page.locator('(//p[@class="oxd-text oxd-text--p"])[1]')).toHaveText('Username : Admin')
        await expect(page.locator('(//p[@class="oxd-text oxd-text--p"])[2]')).toHaveText('Password : admin123')


    });
});
import { test, expect } from '@playwright/test';

// const logincreds = {

//     creds1: {

//         username: "Vijay",
//         password: "Vijji@12b5"
//     },
//     creds2: {

//         username: "Chris",
//         password: "Chris@12a25"
//     },
//     creds3: {

//         username: "Yamuna",
//         password: "Yamuna@1225m"
//     },
//     creds4: {

//         username: "Lingaraj",
//         password: "abc@12e25"
//     }

// }

// for(let key in logincreds){

//     const { username, password } = logincreds[key];

//     test(`Verify Login with Valid Username and Invalid Password - ${username} `, async ({ page }) => {
//         await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//         await page.getByRole('textbox', { name: 'Username' }).fill(`${username}`);
//         await page.getByRole('textbox', { name: 'Password' }).fill(`${password}`);
//         await page.getByRole('button', { name: 'Login' }).click();
//         // await expect(page.getByText('Invalid credentials')).toBeVisible();
//          const errorMessage = page.locator('.oxd-alert-content-text');
//   await expect(errorMessage).toHaveText('Invalid credentials');
//     });

// }


const logincreds2 = [ {

        username: "Raju",
        password: "Raju@1225"
    }, {

        username: "Lingaraj",
        password: "abc@1225"
    }]

 for (let user of logincreds2) {

     const { username, password } = user;

    test(`Verify Login with Valid Username and Invalid Password - ${username} `, async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByRole('textbox', { name: 'Username' }).fill(`${username}`);
        await page.getByRole('textbox', { name: 'Password' }).fill(`${password}`);
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText('Invalid credentials')).toBeVisible();
    });

}
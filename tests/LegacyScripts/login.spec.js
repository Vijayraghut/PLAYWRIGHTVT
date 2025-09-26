import { test, expect } from '@playwright/test';

test.describe("verify login functionality", () => {
    let page;

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });



test('Verify Login functionality with valid creds', async () => {

    var username = "Admin"    // variables use in playwright script
    var password = "admin123"

    // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Username' }).click();

    await page.getByRole('textbox', { name: 'Username' }).fill(username);
    await page.screenshot({ path:'tests/screenshots/'+Date.now()+'username.png'})  //for page screenshot;

    await page.getByRole('textbox', { name: 'Password' }).click();

    await page.getByRole('textbox', { name: 'Password' }).fill(password);
    await page.screenshot({ path:'tests/screenshots/'+Date.now()+'password.png'}) //for page screenshot;

    // Take screenshot of login button before clicking it
    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.screenshot({ path: 'tests/screenshots/loginbutton.png' });
    
    // Click login button
    await loginButton.click();

    //   Assertions
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible({ timeout: 30000 });
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

     //(//div[@class="emp-distrib-chart"]/div/canvas)[2]  which locator for piechart
  await page.waitForSelector('(//div[@class="emp-distrib-chart"]/div/canvas)[2]');
  
  await page.locator('(//div[@class="emp-distrib-chart"]/div/canvas)[2]').screenshot({ path: 'tests/screenshots/' +'pichart.png' })
    await expect(page.locator('ul.oxd-main-menu')).toBeVisible() // Menut  Items 

});

test('Verify the login  with valid username and invalid password', async () => {

     const credentials = ["Admin" , "admin8500"] // Array -Zero based indexing used in playwright test script

    // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.locator('//div[@class="orangehrm-login-branding"]')).toBeVisible();
    await page.locator('//input[@placeholder="Username"]').fill(credentials[0]);
    await page.locator('//input[@placeholder="Password"]').fill(credentials[1]);
    await page.locator('//button[@type="submit"]').click();
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
})

test('verify the login with invalid username and valid password', async () => {

    const creds = {

        username:"Varun",
        password : "admin123"

    }  // objects used in scripts



    // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.locator('//img[@alt="company-branding"]')).toBeVisible();
    // await page.locator('//input[@placeholder="Username"]').fill("Varun");


    await page.locator('//input[@placeholder="Username"]').fill(creds.username);
    


    // await page.locator('//input[@type="password"]').fill("admin123");
    await page.locator('//input[@type="password"]').fill(creds.password);
    
    
    await page.locator('//button[@type="submit"]').click();
  

    await expect(page.locator('//div[@class="oxd-alert-content oxd-alert-content--error"]')).toBeVisible();
})

test('verify login with invalid creds', async () => {

    // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.locator('//img[@alt="company-branding"]')).toBeVisible();
    await page.locator('//input[@placeholder="Username"]').fill("Varun");
    await page.locator('//input[@type="password"]').fill("admin123");
    await page.locator('//button[@type="submit"]').click();
    await expect(page.locator('//div[@class="oxd-alert-content oxd-alert-content--error"]')).toBeVisible();
})

// Close the describe block
});



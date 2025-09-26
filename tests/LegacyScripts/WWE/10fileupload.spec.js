const { test, expect } = require('@playwright/test');


const images = {

    path1: "TestData/uploadfiles/1lionjpg.jpeg",
    path2: "TestData/uploadfiles/3 cheguevara.jpg"
}

for (let image in images) {

    test(`should add a new employee successfully - with ${image}`, async ({ page }) => {
        // Launch URL
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // Login as Admin
        await page.locator('input[placeholder="Username"]').fill('Admin');
        await page.locator('input[placeholder="Password"]').fill('admin123');
        await page.locator('button[type="submit"]').click();

        // Navigate to PIM
        await page.locator('span').filter({ hasText: 'PIM' }).click();


        // Click Add Employee
        await page.locator("//a[text()='Add Employee']").click()



        // // Generate random first and last names
        // const firstName = faker.person.firstName();
        // const lastName = faker.person.lastName();

        // console.log(firstName)
        // console.log(lastName)

        // Fill employee details
        await page.getByPlaceholder('First Name').fill("Vijay");
        await page.getByPlaceholder('Last Name').fill("Bujji");

        //upload file 

        await page.locator('//input[@type="file"]').setInputFiles(images[image])

        // Click Save
        await page.locator('button[type="submit"]').click();

    });

}
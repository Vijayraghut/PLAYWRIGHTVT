const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

test('Add new employee in OrangeHRM', async ({ page }) => {
    // Launch URL
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    // Login as Admin
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    
    // Navigate to PIM and Add Employee
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('button', { name: 'Add' }).click();
    
    // Generate random Indian name
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    
    // Fill employee details
    await page.getByPlaceholder('First Name').fill(firstName);
    await page.getByPlaceholder('Last Name').fill(lastName);
    
    // Save employee
    await page.getByRole('button', { name: 'Save' }).click();
    
    // Verify success message
    const successMessage = page.getByText('Successfully Saved');
    await expect(successMessage).toBeVisible();
    
    // Optional: Log the created employee name
    console.log(`Created employee: ${firstName} ${lastName}`);
});

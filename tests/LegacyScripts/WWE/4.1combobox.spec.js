import {test, expect } from '@playwright/test'

// combobox is similar to dropwon but not dropdown

test('OrangeHRM Combobox Test', async ({ page }) => {
    // Navigate and login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify dashboard
    
    await expect(page.locator("//span[text()='Dashboard']")).toBeVisible();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    // Navigate to PIM
    await page.getByRole('link', { name: 'PIM' }).click();

    // Verify employee list page
    await expect(page.getByText('Employee Information')).toBeVisible();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');

    // Search and select employee
    await page.locator('//label[text()="Employee Name"]/../..//input').fill('Ra');
    await page.getByText('Ravi M B').click();
});
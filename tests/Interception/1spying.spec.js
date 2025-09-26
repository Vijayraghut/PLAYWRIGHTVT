const { test, expect } = require('@playwright/test');

test.describe('Verify PIM calls Spying', () => {
  test('Spying class example', async ({ page }) => {
    // Set up wait-for-response promises for each endpoint
    const getEmployeesPromise = page.waitForResponse(request =>
      request.url().includes('/api/v2/pim/employees') &&
      request.request().method() === 'GET'
    );
    const empStatusPromise = page.waitForResponse(request =>
      request.url().includes('/api/v2/admin/employment-statuses') &&
      request.request().method() === 'GET'
    );
    const jobTitlesPromise = page.waitForResponse(request =>
      request.url().includes('/api/v2/admin/job-titles') &&
      request.request().method() === 'GET'
    );
    const subunitsPromise = page.waitForResponse(request =>
      request.url().includes('/api/v2/admin/subunits') &&
      request.request().method() === 'GET'
    );
    const rajuPromise = page.waitForResponse(request =>
      request.url().includes('/raju') &&
      request.request().method() === 'GET'  // this is create negative api
    , {timeout: 5000}).catch(() => null);

    // Navigate to the app and perform login (execution will start from here once you clic on pim then it will go to promises and verify the api calls)
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');

   // Verify the main menu item is visible
    await expect(page.locator('a.oxd-main-menu-item.active')).toBeVisible();

    // Navigate to the PIM module
    await page.click('a[href="/web/index.php/pim/viewPimModule"]');
    // 4 calls should be go to the database


    
    // Wait for and verify the responses
    // to verify the response firs we have to create a promises It is created on top we create here also
    const getEmployeesResponse = await getEmployeesPromise;
    expect(getEmployeesResponse.status()).toBe(200);

    const subunitsResponse = await subunitsPromise;
    expect(subunitsResponse.status()).toBe(200);

    const jobTitlesResponse = await jobTitlesPromise;
    expect(jobTitlesResponse.status()).toBe(200);

    const empStatusResponse = await empStatusPromise;
    expect(empStatusResponse.status()).toBe(200);

    const rajuResponse = await rajuPromise;   //  there is no api with raju and so it will not go to database then it will fail
    expect(rajuResponse).toBeNull(); // Expect null since the request should fail
  });
});


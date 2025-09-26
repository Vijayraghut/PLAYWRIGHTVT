import { test, expect } from '@playwright/test';

/*In Playwright Test, you don’t directly create page, browser, or context objects. Instead, Playwright 
provides them as built-in fixtures so you can use them inside your tests.

“Playwright Test provides four built-in fixtures for UI automation: 
1.page, 2.browser, 3.context, and 4.browserName.*/


// 1.page → Represents a single browser tab. Most UI automation steps are written using the page fixture.

// When to use: Almost all UI automation — navigating, clicking, typing, asserting, etc.

test('login flow', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.fill('#username', 'admin');
  await page.fill('#password', '12345');
  await page.click('button[type=submit]');
  await expect(page).toHaveURL('/dashboard');
});



/*2.browser → Represents the actual browser instance (like Chromium, Firefox, or WebKit).
When to use:
If you want to launch a new browser manually.
If you need more than one independent browser (not just a tab/context).*/

test('open two browsers', async ({ browser }) => {
  const browser2 = await browser.browserType().launch();
  const context1 = await browser.newContext();
  const context2 = await browser2.newContext();
  // Now you can run tests in two totally separate browsers
  await browser2.close();
});


/* 3.context → Represents a browser context (like a new, isolated browser profile with its own cookies/storage).
*.If you want to test multiple users (e.g., Admin vs. Customer).
*If you want to ensure session isolation between tests.*/
test('multiple users', async ({ browser }) => {
  const adminContext = await browser.newContext();
  const userContext = await browser.newContext();

  const adminPage = await adminContext.newPage();
  const userPage = await userContext.newPage();

  await adminPage.goto('https://example.com/admin');
  await userPage.goto('https://example.com/user');

  // Each has its own session and cookies
});


/*4.browserName → A string value that tells you which browser the test is running on (chromium, firefox, or webkit).
When to use:
If you need browser-specific logic (rare, but useful).*/
test('check browser-specific feature', async ({ page, browserName }) => {
  await page.goto('https://example.com');
  if (browserName === 'firefox') {
    console.log('Running extra step for Firefox');
  }
});

/*What is the request fixture?
It is an instance of APIRequestContext.
It allows you to send API calls (GET, POST, PUT, DELETE, etc.) directly from your test, without opening a browser.
Useful for API testing or setup/teardown (e.g., creating a user before UI test).*/

// request.get
// request.post
// request.put
// request.delete

//  Example usage

test('API request example', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.status()).toBe(200);

  const data = await response.json();
  console.log(data);
  expect(data.id).toBe(1);
});

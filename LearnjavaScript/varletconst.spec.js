import { test, expect } from '@playwright/test';

test('example of var, let and const in Playwright', async ({ page }) => {
  
  // ---------- var ----------
  // function scoped, can be re-declared
  var url = 'https://playwright.dev/';
  await page.goto(url);

  // ---------- let ----------
  // block scoped, can be reassigned but not re-declared in the same scope
  let pageTitle = await page.title();
  console.log('Page title:', pageTitle);

  // update the variable with new value
  pageTitle = pageTitle.toUpperCase();
  console.log('Updated title:', pageTitle);

  // ---------- const ----------
  // block scoped, cannot be reassigned, but can be used for constants
  const docsLink = 'text=Docs';
  await page.click(docsLink);

  // You cannot do: docsLink = 'text=API';  // ❌ will throw error

  // You can still use const for objects/arrays
  const testResults = [];
  testResults.push(pageTitle); // allowed
  console.log('Test results:', testResults);

  // Assertion example
  await expect(page).toHaveURL(/.*docs/);
});

// some wrong usage examples inside a Playwright script

import { test } from '@playwright/test';

test('wrong usage of var, let and const', async ({ page }) => {
  
  // ---------- var ----------
  // Redeclaration is allowed (but confusing!)
  var url = 'https://playwright.dev/';
  var url = 'https://example.com/';  // ✅ This works, but it's bad practice (confusing).

  await page.goto(url);  // Goes to example.com, not playwright.dev
  
  // ---------- let ----------
  let title = 'Playwright';
  // let title = 'Example';  // ❌ Error: Identifier 'title' has already been declared (cannot redeclare in same scope)
  
  title = 'Updated';  // ✅ Reassignment is allowed

  // ---------- const ----------
  const docsLink = 'text=Docs';
  // docsLink = 'text=API';  // ❌ Error: Assignment to constant variable (cannot reassign)

  const results = [];
  results.push('First test');  // ✅ Allowed (modifying array content is fine)

  // results = ['Another test'];  // ❌ Error: Cannot reassign the const variable to a new array
});

// Best practice pattern
import { test, expect } from '@playwright/test';

test('best practice usage of variables in Playwright', async ({ page }) => {
  
  // --- Use const for values that never change ---
  const baseUrl = 'https://playwright.dev/';
  const docsLink = 'text=Docs';   // selectors should be const
  const searchInputSelector = '#search';

  await page.goto(baseUrl);

  // --- Use let when the value will change ---
  let pageTitle = await page.title();
  console.log('Initial title:', pageTitle);

  // Modify value (so let is appropriate here)
  pageTitle = pageTitle.toUpperCase();
  console.log('Modified title:', pageTitle);

  // --- Example: storing test results ---
  const testResults = [];
  testResults.push(pageTitle); // array content can change, but variable name cannot be reassigned

  await page.click(docsLink);
  await expect(page).toHaveURL(/.*docs/);
});


// Rules of Thumb in Automation

// Use const for:

// URLs (baseUrl, endpoints)

// Selectors (#id, text=Login, etc.)

// Test data that should never change



// Use let for:

// Variables whose values will be reassigned (like dynamic page titles, counters, loops).
 

// Avoid var:

// It’s function-scoped and allows redeclaration → can cause bugs.

// Modern JavaScript projects (like Playwright tests) almost never use var.
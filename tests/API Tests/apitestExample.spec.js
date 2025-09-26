const { test, expect } = require('@playwright/test');

test.describe('API Testing Examples', () => {
  
  test('GET request example', async ({ request }) => {
    const response = await request.get('https://api.example.com/users');
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody).toBeDefined();
  });

  test('POST request example', async ({ request }) => {
    const response = await request.post('https://api.example.com/users', {
      data: {
        name: 'John Doe',
        email: 'john@example.com'
      }
    });
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    expect(responseBody.name).toBe('John Doe');
  });

  test('PUT request example', async ({ request }) => {
    const response = await request.put('https://api.example.com/users/1', {
      data: {
        name: 'Updated Name'
      }
    });
    expect(response.status()).toBe(200);
  });

  test('DELETE request example', async ({ request }) => {
    const response = await request.delete('https://api.example.com/users/1');
    expect(response.status()).toBe(204);
  });

});
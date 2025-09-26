const { test } = require('@playwright/test');

test('Test for broken links', async ({ page, request }) => {

    await page.goto('https://bstackdemo.com/', { timeout: 60000 });

    const links = await page.$$('a');

    for (let i = 0; i < links.length; i++) {
        const link = links[i];

        const href = await link.getAttribute('href', { timeout: 60000 });
        if (href) {

            console.log(href)
            const response = await request.get(href, { timeout: 60000 });
            console.log(response.status())
            if (response.status() >= 400) {
                console.log(`Link ${href} is a broken link`);
            }
        }
    }


});
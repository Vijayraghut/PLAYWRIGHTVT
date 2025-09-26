
const { browser, test, expect } = require('@playwright/test');

test.describe('Automation - Working With Table', () => {

  test('Playwright Test Case - table', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/tables');

    //How many tables are present 

    const tables = await page.$$('table'); // ["#table1", "#table2"]
    expect(tables.length).toBe(2)

    await expect(page.locator("//table")).toHaveCount(2)


    //How many rows are present 

    const rows = await page.$$('#table1 > tbody >tr'); //[4 elements]
    // #table1 > tbody >tr = which is common locator
    expect(rows.length).toBe(4)
    //expect(rows.length).to.be.within(4, 10);

    //or

    await expect(page.locator('#table1 > tbody > tr')).toHaveCount(4)  
    //await expect(page.locator('//table[@id="table1"]/tbody/tr')).toHaveCount(4)--Xpath

    
    //How many coloumn are present 

    const columns = await page.$$('#table1 > thead >tr >th');
    //const columns = await page.$$('//table[@id="table1"]/thead/tr/th') --Xpath
    expect(columns.length).toBe(6);

    const headerColumns = await page.$$('//table[@id="table1"]/tbody/tr[1]/td');
    expect(headerColumns.length).toBe(6);

    await expect(page.locator('#table1 > tbody > tr:nth-child(1) > td')).toHaveCount(6)
    
    // await expect(page.locator('//table[@id="table1"]/thead/tr/th')).toHaveCount(6)--Xpath

    //Verify values 
     
    // verify in first row third column "jsmith@gmail.com" is there are not
    await expect(page.locator('//table[@id="table1"]/tbody/tr[1]/td[3]')).toHaveText("jsmith@gmail.com")


    // // verify in 2nd row third column "fbach@yahoo.com" is there are not
    await expect(page.locator('#table1 >tbody>tr:nth-child(2) >td:nth-child(3)')).toHaveText("fbach@yahoo.com")

    const textvalue = await page.locator('#table1 >tbody>tr:nth-child(4) >td:nth-child(3)').textContent()

    await expect(textvalue).toContain("tconway@earthlink.net"); // text1 contains text2
    await expect(textvalue).toMatch(/tconway/); // text1 matches the regular expression

    await page.locator('#table1 >tbody>tr:nth-child(3)>td:nth-child(6) >a:nth-child(2)').click()


  })

})
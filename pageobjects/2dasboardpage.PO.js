
const {  expect } = require('@playwright/test');

exports.dashboardPage = class dashboardPage {

        constructor(page){
        this.page = page

        this.pimMenu = page.locator('//a[@href="/web/index.php/pim/viewPimModule"]')

        this.adminMenu = page.locator('')       
    }

    async navigatetoPIM(){

        await this.pimMenu.click()
    }




}
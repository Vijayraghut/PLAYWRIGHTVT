const { expect } = require('@playwright/test');

exports.addEmployeePage = class addEmployeePage {

    constructor(page) {
        this.page = page

        this.addEmployeeSubmenu = page.locator("//a[text()='Add Employee']")
        this.firstanmeInput = page.locator('//input[@name="firstName"]')
        this.lastnameInput = page.locator('//input[@name="lastName"]')
        this.saveBtn = page.locator('//button[@type="submit"]')
        this.headerPersonalDetails = page.locator("//h6[text()='Personal Details']")
    }

    async navigatetoAddEmployee(){

     await this.addEmployeeSubmenu.click()
    }

    async addEmployee(firstname, lastname){

        await this.firstanmeInput.fill(firstname)
        await this.lastnameInput.fill(lastname)
        await this.saveBtn.click()
    }

      async addEmployeenew(fristname, lastname){

        await this.firstanmeInput.fill(fristname)
        await this.lastnameInput.fill(lastname)
        await this.saveBtn.click()
    }

    async addemployyeeSuccessMesage(){

        await expect(this.headerPersonalDetails).toBeVisible()
    }


}
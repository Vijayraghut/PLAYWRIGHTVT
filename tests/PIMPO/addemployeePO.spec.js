const { test, expect } = require('@playwright/test');
import { loginPage } from '../../pageobjects/loginpage.PO';
import { dashboardPage } from '../../pageobjects/2dasboardpage.PO'
import { addEmployeePage } from '../../pageobjects/3addemployee.PO';
import logindata from "../../TestData/login.json"
import addemployeedata from "../../TestData/addjobtitle.json"



let page;
let login;
let dashboard;
let addemp;
test.describe("Verify Add Employee functionality ", async () => {


    test.beforeEach(async ({ browser }) => {

        page = await browser.newPage()

        login = new loginPage(page)
        dashboard = new dashboardPage(page)
        addemp = new addEmployeePage(page)

        await login.lauchUrl()
        await login.loginwithCreds(logindata.username, logindata.password)
        await login.loginSuccess()

    })

    test("Verify add Employee with Mandatory detaials", async () => {

        await dashboard.navigatetoPIM()
        await addemp.navigatetoAddEmployee()
        await addemp.addEmployee(addemployeedata.firstname, addemployeedata.lastname)
        await addemp.addemployyeeSuccessMesage()

    })



})
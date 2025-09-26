
const { test, expect } = require('@playwright/test');
import { loginPage } from '../../pageobjects/loginpage.PO';
import logindata from '../../TestData/login.json'



let page ;
let login;
test.describe("Verify Login functionality ", async ()=>{


    test.beforeEach( async ({browser}) =>{
    
        page = await browser.newPage()

        login = new loginPage(page)

        await login.launchUrl()

    })

    test("Verify Login with Valid credentials", async () =>{

       await login.loginwithCreds(logindata.username, logindata.password)
       await login.loginSuccess()

    })

     test("Verify Login with Valid username and INvalid Password", async () =>{

       await login.loginwithCreds(logindata.username, logindata.wrongpassword)
       await login.loginError()

    })

    test("Verify Login with INValid username and valid Password", async () =>{

       await login.loginwithCreds(logindata.wrongusername, logindata.password)
       await login.loginError()

    })

    test("Verify Login with InValid username and INvalid Password", async () =>{

       await login.loginwithCreds(logindata.wrongusername, logindata.wrongpassword)
       await login.loginError()

    })


})

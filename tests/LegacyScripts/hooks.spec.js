import { test, expect } from '@playwright/test';


 
test.describe("verify the payment using different methods", async ()=>{


    test.beforeAll(() =>{

        console.log("Before All Say Hii")
    })

    test.beforeEach(() =>{

         console.log("Launch the URL");
         console.log("login with creds");
         console.log("search the product");
         console.log("add to cart the product");
         console.log("select/add the delivery address");

    })

    test.afterEach( async()=>{

        
        await console.log("after cancel the order");

    });


    test.afterAll(() =>{

        console.log("After all it wil execute once")
    })



    test('verify that the user can make a payment with debit card', async ({ page }) => {


            console.log("make a payment with debit card");
            console.log("order success");


        
    })
   
    test('verify that the user can make a payment with credit card', async ({ page }) =>{


            console.log("make a payment with credit card");
            console.log("order success");




    })

    
    test('verify that the user can make a payment with upi method', async ({ page }) =>{


            console.log("make a payment with upi method");
            console.log("order success");



    

    })

    test('verify that the user can make a payment with net banking', async ({ page }) =>{

            console.log("make a payment with net banking");
             console.log("order success");



      

    })


})
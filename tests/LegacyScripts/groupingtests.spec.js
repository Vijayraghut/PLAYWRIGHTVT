
import { test, expect } from '@playwright/test';

test.describe.skip("Group 1", async ()=>{

   test("Test case 1", async ({page})=>{

    await page.goto("https://meet.google.com/")

        console.log("This is test case 1")
   })

   test("Test case 2", async ()=>{

        console.log("This is test case 2")
   })

   test("Test case 3", async ()=>{

        console.log("This is test case 3")
   })

   test("Test case 4", async ()=>{

        console.log("This is test case 4")
   })


   test("Test case 5", async ()=>{

        console.log("This is test case 5")
   })

})


test.describe("Group 2", async ()=>{

   test("Test case 6", async ()=>{

        console.log("This is test case 6")
   })

   test("Test case 7", async ()=>{

        console.log("This is test case 7")
   })

  
})
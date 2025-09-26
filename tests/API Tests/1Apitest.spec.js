import { expect, test } from "@playwright/test";

test("Verify List of users Get APi", async ({request})=>{

 const getAllUsers = await request.get('https://reqres.in/api/users?page=2', 
    {headers: { "x-api-key": "reqres-free-v1" }
   
     } );


  expect(getAllUsers.ok()).toBeTruthy();  // True 
  expect(getAllUsers.status()).toBe(200);   // this is verify the response

  const jsonresponse = await getAllUsers.json()

  console.log(jsonresponse)

  const response = await getAllUsers.json()

   expect(response.page).toBe(2)

    expect(response.per_page).toBe(6)

   expect(response).toHaveProperty('total_pages');
   expect(response.total_pages).toBe(2);


   expect(response.data[0].email).toBe("michael.lawson@reqres.in")

   expect(response.data[5].last_name).toBe("Raju")

   expect(response.data[0].first_name).toBe("Michael")


})


test('POST API', async ({ request }) => {


    const requrl = `https://reqres.in/api/users`
    const header = { "x-api-key": "reqres-free-v1"
     }
    const payload = {
        "name": "Naveen",
        "job": "Student"
      }

  const createUser = await request.post(requrl,
    {
      headers: header,
      data: payload
    });
  expect(createUser.ok()).toBeTruthy();
  expect(createUser.status()).toBe(201);

  console.log(await createUser.json())

  const response = await createUser.json()

  expect(response.name).toBe("Naveen")
  expect(response.job).toBe("Student")

  expect(response).toHaveProperty('id');

  expect(response).toHaveProperty('createdAt');
 

  console.log(response.id)
  console.log(response.createdAt)

});
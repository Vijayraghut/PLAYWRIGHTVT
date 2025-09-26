// // // //callback

// // step1(10, function (result1, boolvalue) {
// //     if (!boolvalue) {
// //       step2(result1, function (result2, boolvalue) {
// //         if (!boolvalue) {
// //           step3(result2, function (result3, boolvalue) {
// //             if (!boolvalue) {
// //               console.log("Results " + result3);
// //             }
// //           })
// //         }
// //       })
// //     }
// //   });

// //   function step1(value, callback) {   
// //     callback(value + 10, false);
// //   }

// //   function step2(value, callback) {   
// //     callback(value + 10, false);
// //   }

// //   function step3(value, callback) {   
// //     callback(value + 10, false);  //40
// //   }


// // // //Promise 



// //  function step1(value, error) {
// //     return new Promise((resolve, reject) => {
// //       if (error) { 
// //         reject('Something went wrong');
// //       } else {
// //          resolve(value + 10);
// //       }
// //     });
// //   }

// //   function step2(value, error) {
// //     return new Promise((resolve, reject) => {
// //       if (error) { 
// //         reject('Something went wrong');
// //       } else {
// //         resolve(value + 10); 
// //       }
// //     });
// //   }

// //   function step3(value, error) {
// //     return new Promise((resolve, reject) => {
// //       if (error) { 
// //         reject('Something went wrong');
// //       } else {
// //         resolve(value + 10);
// //       }
// //     });
// //   }

// //   // Usage:
// //    step1(10, false)
// //      .then((result1) => step2(result1, false))
// //      .then((result2) => step3(result2, false))
// //      .then((result3) => console.log(result3))
// //      .catch((error) => console.log(error));

// // // // Async - Await 



// //  async function step1(value) {
// //     return value + 10;
// //   }

// //   //Promise{ 20}

// //   async function step2(value) {
// //     return value + 10;
// //   }

// //   //Promise{ 30}

// //   async function step3(value) {
// //     return value + 10;
// //   }

// // //   //Promise{ 40}

// //   async function run() {

// //       let result1 = await step1(10);    //20
// //       let result2 = await step2(result1);  //30
// //       let result3 = await step3(result2); //40
// //       console.log("Results " + result3);

// //   }

// //    run();

// //=====================================================================



// // function step1(value, callback) {
// //     callback(value + 10, false); // The callback is called with the result and error flag
// //   }

// //   step1(10, function(result, error) {
// //     if (error) {
// //       console.log("An error occurred");        
// //     } else {
// //       console.log("Result: " + result); // If no error, print the result
// //     }
// //   });




// //  function step1(value, error) {
// //     return new Promise((resolve, reject) => {
// //       if (error) { 
// //         reject('Something went wrong');
// //       } else {
// //          resolve(value + 10);
// //       }
// //     });
// //   }

// //   step1(10, false)
// //     .then(result => console.log("Result: " + result))
// //     .catch(error => console.log(error));


// async function step1(value) {
//   return value + 10;
// }

// async function Raju() {
//   return "Raju"
// }




// async function run() {

//   let result1 = await step1(10);    //20

//   console.log("Results " + result1);

//   let x = await Raju()
//   console.log(x)

// }

// run();


// const arr = [2, 5, 6, 7, 8, 9, 3, 4, 6, 7, 5, 4, 9];

// const uniqueArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!uniqueArr.includes(arr[i])) {
//     uniqueArr.push(arr[i]);
//   }
// }
// console.log(uniqueArr); // [2, 5, 6, 7, 8, 9, 3, 4]



// // const uniqueArr = [...new Set(arr)];
// // console.log(uniqueArr); // [2, 5, 6, 7, 8, 9, 3, 4]


// // var let const 

// // What are datatypes supported by JS 

// // What is the difference between null and undefined 
// //  explain different types of operators 
// //syntax for ternary operator 
// //== ===
// //  if  else if  switch 
// // Loops 

// // 1 to 100 

// // devisible by 3 print fizz 
// //   devisible by 5 print Buzz 
// //     devisible by 3 & 5  print fizzbuzz 

// //     otherwise print number 

// // 1
// // 2
// // fizz
// // 4
// // Buzz
// // fizz
// // 7
// // 8
// // fizz
// // Buzz
// // 11
// // fizz
// // 13
// // 14
// // fizzbuzz


// for (let i = 1; i <= 100; i++) {

//   if (i % 3 == 0 && i % 5 == 0) {

//     console.log("fizzbuzz")
//   }
//   else if (i % 3 == 0) {
//     console.log("fizz")
//   }
//   else if (i % 5 == 0) {
//     console.log("buzz")
//   }
//   else {

//     console.log(i)

//   }

// }

str = "madam"  // Palindrome or not 

function checkPalindrome(str) {

  revstr = str.split("").reverse().join("")

  if (str == revstr) {

    console.log("Given string is Palindrome")
  }
  else {
    console.log("Given string is not a  Palindrome")

  }

}

checkPalindrome("raju")



/*"make and eat food" example and show it using:
1. Callback
2. Promise
3. Async/Await*/

// 1. Using Callback
function makeFood(callback) {
  console.log("Making food...");

  setTimeout(() => {
    console.log("Food is ready!");
    callback(); // Run the callback after food is ready
  }, 2000);
}

function eatFood() {
  console.log("Eating the food 🍽️");
}

makeFood(eatFood); // Pass eatFood as a callback

// 2. Using Promise:
function makeFood() {
  console.log("Making food...");

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Food is ready!");
      resolve(); // Continue after food is ready
    }, 2000);
  });
}

function eatFood() {
  console.log("Eating the food 🍽️");
}

makeFood().then(eatFood); // Then eat the food

// 3. Using Async/Await
function makeFood() {
  console.log("Making food...");

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Food is ready!");
      resolve();
    }, 2000);
  });
}

async function prepareAndEat() {
  await makeFood(); // Wait for food to be ready
  console.log("Eating the food 🍽️");
}

prepareAndEat();



// let regex = /Hello world/;
// let str = " Hello world";

// console.log(regex.test(str)); // true (because "hello" is present)

// // 1. Test if a string contains a word
// const regex = /apple/;
// console.log(regex.test("I have an apple")); // true

// // 2. Case-insensitive search
// const regex = /apple/i;
// console.log(regex.test("I have an Apple")); // true

// // 3. Find all digits in a string
// const regex = /\d+/g;
// const result = "My number is 123456".match(regex);
// console.log(result); // ["123456"]

// // 4. Validate an email
// const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
// console.log(emailRegex.test("example@mail.com")); // true

// 5. Replace all spaces with hyphens
const str = "Replace all spaces";
const result = str.replace(/\s/g, "-");
console.log(result); // "Replace-all-spaces"

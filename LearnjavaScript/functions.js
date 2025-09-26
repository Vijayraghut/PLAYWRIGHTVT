

/* A function  is a reusable block of code that performs a specific task.
 It runs only when it is called
 A function is a set of statements that runs only when it is called.
function is used to avoid repeating code and to make code cleaner and reusable, to organize logig into small parts*/


// Syntax
function functionName(parameters) {
    // block of code
    return value; // optional
}

/* function → keyword to declare a function

 functionName → name you give to the function

 parameters → values you can pass into the function (optional)

 return → keyword to give back a result (optional)*/

// =====================================================================

// Example I: Function without Parameters

//  function printNames(){

//     console.log("Vijay")
//     console.log("Thrija")
//     console.log("Raghava")
//     console.log("Veena")

//  }

//  // calling the function and we can call the function number of times
//  printNames()

//  printNames()   

// -------------------------------------------
// ex:(ii)

function greet() {
    console.log("Hello, welcome to JavaScript!");
}

// calling the function
greet();

// example:

function today() {

    console.log("today is the great day")
}
today();


// -------------------------------------------------------------

// Example II: "Function with Parameters"

function greet(name) {

    console.log("Hello," + name + "!")

}

greet("Vijay")  // Hello,Vijay
greet("Thrija")  // Hello,Thrija

// ex: (i)

function add(num1, num2) {

    console.log(num1);
    console.log(num2);
    console.log(num1 + num2);

}

add(5, 6)      // 5 6 11

add(74, 84)    // 74 84 158

// ex:
function subtractNumbers(a, b) {

    console.log(a)
    console.log(b)
    console.log(a - b)

}

subtractNumbers(95, 65)

subtractNumbers(43, 25)

// =============================================

// Example III - function with return value

function add(a, b) {

    return (a + b)
}

let result = add(5, 3)
console.log(result)         // or we can directly call like console.log(add(5,3))

//console.log(add(5,3))

// ex-(ii)

function multiply(x, y) {
    return (x * y)
}

let Output = multiply(8, 9)
console.log(Output)

// console.log(multiply(8,9))

// ================================================================

// if you want to generate random email id and it should give the different email id everytime

// // program to generate random strings
// const result = Math.random().toString(36).substring(2,7);
// console.log(result);

let randomchars = Math.random().toString(36).substring(2, 7);
console.log(randomchars)

function generateRandomEmail() {

    let randomchars = Math.random().toString(36).substring(2, 7);

    return ("vijaytester" + randomchars + "@gmail.com")

}

let x = generateRandomEmail()
console.log(x)


// const email = generateRandomEmail()
// // await page.locator(Xpath).fill(email)

// textvalue = await pageXOffset.locator(xpath).textcontent()
// await expect(text).to.equal(email)

// ================================================================================ 

/* Arrow function: An Arrow function is a cleaner and shorter way to write functions introduced in ES6 version.
   An Arrow functions are simplified version of function
   It is uses the "=> (arrow)" symbol instead of the "function keyword" */

// "Syntax":
// For Normal Function:
function name_of_the_function() {

    // block of code

}

// Ex1: function without parameter
function displayname() {

    console.log("Vijay")

}
displayname()
// ----------------------------------------
function greetings(name) {
    console.log("hello" + name)
}
greetings("vijay")
// -----------------------------------------

// ex2: function with parameter
function add(a, b) {

    console.log(a + b)
}
add(5, 6)

// ---------------------------------------------------

// ex3:function with return value

function add(a, b) {

    return a + b;

}

let reslt = add(5, 3)
console.log(reslt)
// console.log(add(5,3))

// "SYNTAX FOR ARROW FUNCTION:"
function_nname = () => {

    // block of code

}

//  Ex: // Arrow function
add = (a, b) => {

    return a + b;
}
// console.log(add(4,3))
let z = add(4, 3)
console.log(z)

// -------------------------------------------------------------------------------------------------
/* “In arrow functions, if we have a single statement, we can omit the {} braces and the return keyword,-
  because the value will be returned automatically. But if we use {}, then we must write the return keyword.” */

// Ex:
const addition = (num1, num2) => num1 + num2
console.log(addition(10, 20))                     //Output: 30

// -----------------------------------------------------------------

// Multiple Lines (need {} and return)
const multipl = (a, b) => {
    return a * b;

};
console.log(multipl(4, 3))

// let resltt = multipl(4, 3)
// console.log(resltt)                  // Output: 12

// -----------------------------------------------------------------------

// With Parameters

const square = (n) => n * n;                     // here const,let is optional 
console.log(square(5)); // Output: 25

// ---------------------------------------------------------------------

/* Rule for Arrow Functions with Parameters :

 If there is only one parameter, you can skip the "parentheses ()"".

 "If there are zero or more than one parameters, you must use parentheses ()".*/


// Ex: (single parameter → no ())
let squarerootof = n => n * n              //"here there is no (),{} and return keyword this is shorter way to write"
console.log(squarerootof(8))

// Example (multiple parameters → need ())

add = (x, y) => x + y
console.log(add(3, 7))

// Example (if no parameters → must need ())

greet = () => console.log("hello Good Morning")

// call it
greet()

// =============================================================================

/* ANONYMOUS FUNCTON : - A function without name is called anonymous function
 anonymous function  is written using "function" keyword
 it can be stored in a variable and which is commonly used in  callbacks or invoked immediately */

// Example for function with name
function add(num1, num2) {
    console.log(num1 + num2);
    // ṛeturn num1+num2;
}
console.log(add(2, 3))

// Example for function without name
let greet = function () {                  //Here the function has no name, but is stored in the variable greet.
    console.log("Hello!");
};

greet(); // Hello!

// Anonymous Function Assigned to a Variable
const greet = function (name) {
    console.log("Hello, " + name + "!");
};

greet("Arjun"); // Hello, Alice!

// Here, the function has no name, but it’s stored inside the variable greet. 
// ------------------------------------------------------------------------------

// Anonymous Function in setTimeout (Callback)
setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);
// The function inside setTimeout is anonymous.

// -------------------------------------------------------------------------------

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("I run immediately!");
})();
// This anonymous function executes immediately after it is defined.

// -------------------------------------------------------------------------

/*With Arrow Function (Anonymous by Default)

 Arrow functions are actually anonymous functions with short syntax.*/

setTimeout(() => {
    console.log("Hello from arrow function!");
}, 1000);

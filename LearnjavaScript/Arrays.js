//Array:
// An Array is a special type of object that is used to store multiple values(datatypes) in a single variable
// Array can holds any type of data including Numbers,Strings,boolean,Objects, and even other type "Arrays"
// Values/elements/Variables stored in an ordered list and each item is accessible using Zero-based index[0 1 2 3...]

// Ex:
//empty array
 let arr = []   

//  Array with elements:
 let arr1 = [1,"viay",3,true,"Thrija"]
// -----------------------------------------------------------------------------------
//  if an array contain same datatypes(elements) which is called "Homogeneous array".

// Ex:
 let arr3 = [1,2,3,4,6]

let names = ["Vijay","Raghu","Bujji"]

//  ------------------------------------------------------------------------------------

//  if an array contain different datatypes(elements) which is called "Heterogeneous array".

// Ex:
let arr4 = [2,"Vijay",true,{key: "value"},["Raju",6,"apple"]]

// ========================================================================

// to find how many elements are there in array we have to use ".lenth()" which is builtin method
// ex:
let arr5 = [1,2,3,4,6,"Vijay","Raghu","Bujji"]
console.log(arr5.length)
// console.log("Array length:", arr5.length)

// ======================================================================================

// in an Array index of the element is always start from Zero(0) first element index is "0"
// ex:
let arr6 = [1,2,3,4,6,"Vijay","Raghu","Bujji"]
console.log(arr6[0])    //1
console.log("Second element (index 1):", arr6[1])
console.log("Last element (index 7):", arr6[7])
// console.log("Array length:", arr6.length)
// console.log("Full array:", arr6)


// Array methods:

// Adding & Removing Elements

// push() → Adds one or more elements at the end of the array.

let fruits = ["apple", "banana"];
fruits.push("mango");
console.log(fruits); // ["apple", "banana", "mango"]


// pop() → Removes last element from the end of the array.

fruits.pop();
console.log(fruits); // ["apple", "banana"]


// unshift() → Adds one or more elements at the beginning of the array.

fruits.unshift("orange");
console.log(fruits); // ["orange", "apple", "banana"]


// shift() → Removes elements from the beginning of the array.

fruits.shift();
console.log(fruits); // ["apple", "banana"

// concat() : Joins two or more arrays into one

let moreFruits = ["kiwi", "melon"];
let all = fruits.concat(moreFruits);
console.log(all); // [ 'apple', 'banana', 'kiwi', 'melon' ]

// -----------------------------------------------------------------

// sort(): Sorts elements in alphabetical or numerical order and ascending or descending order.

let stnames = ["Vijay","Dhanush","Chandra","Thrija","Bhargav","Arjun"]
stnames.sort()
console.log(stnames)

let num = [3, 1, 2];
num.sort();
console.log(num); // [1, 2, 3]

// (a, b) => a - b sorts numbers in ascending order.
// For descending order, we use (a, b) => b - a.

let nums = [10, 5, 20, 1];

nums.sort((a, b) => a - b); 
console.log(nums); // [1, 5, 10, 20] (ascending)

nums.sort((a, b) => b - a); 
console.log(nums); // [20, 10, 5, 1] (descending)
// ==================================================

// reverse(): Reverses the order of elements in the array.

nums3=[5,4,3,2,1]
nums3.reverse();
console.log(nums3); // [ 1, 2, 3, 4, 5 ]

// ==========================================================

// split():converts strings into array
// split() is not an array method.
// It is a string method because it is used on strings, not arrays.

// ex:

str = "Javascript"
arr = str.split("")
console.log(arr)     
/* outpt= [
  'J', 'a', 'v', 'a',
  's', 'c', 'r', 'i',
  'p', 't'] */     


str = "This is Javascript class"
arr = str.split(" ")
console.log(arr)       //[ 'This', 'is', 'Javascript', 'class' ]

// =======================================================================================

// join() :Converts array elements into a string with a separator

let sweetfruits =  [ "Banana", "mango"];
 console.log(sweetfruits.join("-"));

// ==================================================================

// we can replace the strings in the array

let colors =[ "white","Balck","Green","Red"]
colors[2] = "Yellow"
console.log(colors)     //[ 'white', 'Balck', 'Yellow', 'Red' ]

// indexOf() :  Returns the first index of an element. Returns -1 if not found.

indexvalue= colors.indexOf("white")
console.log("index value of White color",indexvalue)
// ========================================================== 

// forEach(): Runs a function for each element of the array.

const cities = ["Bangalore","Hyderabad","Chennai","Mumbai"]

cities.forEach(element => {
  
  console.log("loop starts")
  console.log(element)
  console.log("loop ends")

});

cities.forEach(city => console.log(city));  // we can write this type also

// includes(): Checks if an element exists in the array if it exist which will returs "true" if not "false".

let weeks=["sunday","monday","tuesday","wednesday"]

console.log(weeks.includes("monday")); // true
console.log(weeks.includes("friday")); //false

// slice(): Returns a part of the array (does not change original).
let sliced = weeks.slice(0);
console.log(sliced); // [ 'sunday', 'monday', 'tuesday', 'wednesday' ]

// ex2

let menus =["Admin","PIM","Leave","Buzz","Recruitment"]
console.log(menus.slice(2,4))  //[ 'Leave', 'Buzz' ]

// how to get last element of the array?
console.log(menus[menus.length-1])    //Recruitment

// for..of loop
let menuitems =["Admin","PIM","Leave","Buzz","Recruitment"]
// for(let element of menuitems){

//   console.log("loop starts")
//   console.log(element)
//   console.log("loop ends")
// }

for(let i=0; i <= menuitems.length - 1; i++){
  // You can access each element with menuitems[i]
  console.log("loop starts")
  console.log(menuitems[i]);
   console.log("loop ends")
}

/*1. map()
Definition:

Creates a new array by applying a function to each element of the original array.

Does not change the original array.

Example:*/
let numberss = [1, 2, 3, 4];
let doubled = numberss.map(n => n * 2);

console.log(doubled); // [2, 4, 6, 8]
console.log(numberss); // [1, 2, 3, 4] (original unchanged)

/*🔹 2. filter()
Definition:
Creates a new array with only the elements that pass a condition (true/false).
Does not change the original array.
Example:*/
let numbr = [1, 2, 3, 4, 5, 6];
let evens = numbr.filter(n => n % 2 === 0);

console.log(evens);   // [2, 4, 6]
console.log(numbr); // [1, 2, 3, 4, 5, 6]

/*🔹 3. reduce()
Definition:
Reduces the array to a single value (like sum, product, average, etc.).
Uses a function that takes an accumulator and the current element.
Example (sum of numbers):*/

let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 10


// 👉 Working:

// Start with 0
// (0 + 1) → 1

// (1 + 2) → 3

// (3 + 3) → 6

// (6 + 4) → 10

/*🔹 4. slice()
Definition:
Returns a part of the array as a new array.
Takes slice(start, end) → end is not included.
Does not change the original array.
Example:*/

let fruts = ["apple", "banana", "mango", "orange"];
let slicd = fruits.slice(1, 3);

console.log(slicd);  // ["banana", "mango"]
console.log(fruts);  // ["apple", "banana", "mango", "orange"]

/*🔹 5. splice()
Definition:
Adds, removes, or replaces elements in an array.
Changes (mutates) the original array.
Syntax: splice(start, deleteCount, item1, item2, ...)
Example (removing and adding):*/

let fruuts = ["apple", "banana", "mango", "orange"];
// remove 1 element at index 2 and add "grape"
fruits.splice(2, 1, "grape");
console.log(fruuts); // ["apple", "banana", "grape", "orange"]

// Example (just remove):
let numbs = [1, 2, 3, 4, 5];
numbs.splice(1, 2); // remove 2 elements starting from index 1

console.log(numbs); // [1, 4, 5]












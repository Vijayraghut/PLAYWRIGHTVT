function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); // calling the callback function
}

function sayBye() {
  console.log("Goodbye!");
}

greet("John", sayBye);

// Example 2: Callback with anonymous function

function greetUser(name, callback) {
  console.log("Welcome " + name);
  callback();
}

greetUser("Shashi", function () {
  console.log("You have successfully logged in!");
});

// Example 3: Callback in asynchronous code (real use case)
    console.log("Start");

setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");


// ex:Making and Eating Food

function makeFood(callback) {
  console.log("Making food...");

  setTimeout(function () {
    console.log("Food is ready!");
    callback(); // Call the function passed in
  }, 2000); // Wait 2 seconds to simulate cooking
}

function eatFood() {
  console.log("Eating the food 🍽️");
}

// Use the callback
makeFood(eatFood);


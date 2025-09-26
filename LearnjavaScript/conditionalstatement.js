

// if you want to execute(run) a block of code only when the "condition is true" then you should use an "if-statement"

//Ex:-1

// let condition = true;
// if(condition){
//     console.log("condition is true,run the code")
// }

// Ex-2

if (4 > 2) {

    console.log("condition is true")
}

// if the condition is "false" the block will be skipped and nothing inside will run
// Ex-1
let condition = false;
if (condition) {
    console.log("condition is true,run the code")
}

// ==========================================================================================
// if you want to do something even when the condition is false ,you use "else"

let age = 15

if (age >= 18) {
    console.log("you can vote")
}
else {
    console.log("you cannot vote")
}                                      // here "else" will execute bcz condition is false

// else is not mandatory you can write just an "if" without an "else"
// ===============================================================================================

// else if:-
// when we have multiple conditions ,we can use "else if"
// Ex:-

let marks = 75

if (marks >= 90) {
    console.log("grade A")
}
else if (marks >= 75) {
    console.log("Grade B")
}
else if (marks >= 50) {

    console.log("Grade C")
}
else {
    console.log("Fail")
}

//  Ex-2 of "else if"

let name = "Thrija"

if (name == "Raghu") {
    console.log("Raghu")
}
else if (name == "Ajay") {
    console.log("Ajay")
}
else if (name == "Thrija") {

    console.log("Thrija")
}
else {
    console.log("name not matched")
}

// ======================================================================================
//  Switch case:-
// the switch case statement makes the code clean and easier to read when we have mane conditions to check for the--
//  same value(variable).instead of writing many "if".."else if" we can use "switch".

//  switch case syntax
switch (key) {
    case value:
        
        break;

    default:
        break;
}
// EX:-

let weekday = 4

switch (weekday) {
    case 1:
        consolelog("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;

    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;
    default:
        console.log("Invalid day")
}


let fruits = 3

switch (fruits) {
    case 1:
        consolelog("Apple")
        break;
    case 2:
        console.log("Mango")
        break;

    case 3:
        console.log("Orange")
        break;
    case 4:
        console.log("Grapes")
        break;
    case 5:
        console.log("Banana");
        break;
    case 6:
        console.log("Kiwi")
        break;
    case 7:
        console.log("Watermelon")
        break;
    default:
        console.log("Invalid fruit")
}


//  ====

switch ("Narayana") {
    case "Raju": {

        console.log("Raju")
    }

        break;

    case "Shruthi": {

        console.log("Shruthi")
    }

        break;

    case "Shashi":
        console.log("Shashi")

        break;

    case "Shilpa":
        console.log("Abc")

        break;

    case "Yamuna":

        console.log("Yamuna")
        break;


    default:
        console.log("No Name Matching")
        break;                                 // here default is optional
}

// note : for every case we have to specify "break;" if there is no break it keeps running the next cases ..

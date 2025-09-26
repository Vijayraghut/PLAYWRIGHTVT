class calculator {


   stname= "Vijay"     // variable

    add(numm1, num2) {
        console.log(numm1+num2);
    }
    subtract(numm1, num2) {
        console.log(numm1-num2);
    }
    multiply(numm1, num2) {
        console.log(numm1*num2);
    }

    division(numm1, num2) {
        console.log(numm1/num2);
    }

    constructor(num1,num2){

        console.log(num1,num2)
    }

}
 
const cal1 = new calculator()

cal1.add(6,7)
cal1.subtract(9,4)

// we can create a multiple object
const cal2 = new calculator()

cal1.add(4,5)
cal1.subtract(8,2)

cal1.multiply(8,9)

console.log(cal2.stname)      //variable call

/* inside the class we have constructor when we creat an object dont need to call it wiil automaticall
   invoked with object creation only*/

const cal3 = new calculator(20,30)


/* "this" keyword : to access variables (properties) inside a class, we use the this keyword.
this refers to the current object.
 we can also use this to call another method inside the same class.*/

//  class employee{

//     empname="Vijay"

//     displayEmpDetails(){

//         console.log(empname);

//     }
//  }

//  const emp = new employee()
//  emp1.displayEmpDetails()    // it shows empname is not defined bcz we cant access without "this" keyword


 //ex with "this" keyword

 class employ{

    empname="Arjun"

    displayEmpDetails(){

        //    with "this" keyword we can access
        console.log(this.empname);

    }

        // with "this" keyword we can also use this to call another method inside the same class

    m1() {
        console.log("it is method 1");
    }

    m2() {
        console.log("it is method 2");
    }

    m3() {
        console.log("it is method 3");

        this.m1();
    }
constructor(value){

        console.log(value)
       
    }
    
 }

 const emp1 = new employ()

 emp1.displayEmpDetails() 

 emp1.m3()

 const emp2 = new employ("thrija")  //simply i create another object for constructor to print sepate

//  static keyword:

 /*A variable declared with static inside a class is a static variable (property).

A variable declared without static inside a class is a non-static variable (instance property).

A method declared with static inside a class is a static method.

A method declared without static inside a class is a non-static (instance) method.

Static variables and static methods belong to the class and can be accessed without creating an object.

Non-static variables and methods belong to the object and can be accessed only through an object.*/

class Example {
  // non-static (instance) variable
  name = "Instance Variable";

  // static variable
  static company = "OpenAI";

  // non-static method
  showName() {
    console.log("Name:", this.name);
  }

  // static method
  static showCompany() {
    console.log("Company:", this.company);
  }
}

// Accessing static variable and method (no object needed)
console.log(Example.company);   // Output: OpenAI
Example.showCompany();          // Output: Company: OpenAI

// Accessing non-static variable and method (need object)
const obj = new Example();
console.log(obj.name);          // Output: Instance Variable
obj.showName();                 // Output: Name: Instance Variable




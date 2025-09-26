
// 1.Encapsulation: Data binding between different methods within the class
// Define a class (template for objects)

// Ex:
class student {

    studentdetails(name, place, course) {

        this.studentname = name
        this.studentplace = place
        this.studentcourse = course

    }

    displaystudetails() {

        console.log(this.studentname, this.studentplace, this.studentcourse)
    }

}

const stu1 = new student()

stu1.studentdetails("Raju", "Blr", "Playwright")

stu1.displaystudetails()

// Ex2

class Person {
    Persondetails(name, age, place) {
        this.Personname = name;
        this.Personage = age;;
        this.Personplace = place;
    }

    // Method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old and Iam from ${this.place}`);
    }
}

// Create an object (instance of Person)
const person1 = new Person('Arjun', 25, "Bangalore");

person1.greet(); // Output: Hello, my name is Alice and I am 25 years old and Iam from Bangalore

// 2. Inheritance:Inheritance is a mechanism where a child class inherits properties and behavior (methods)
// from a parent class. It promotes code reusability.


// // 1. Single Inheritance
// // A class (child) inherits from only one class (parent)

// class Animal {
//     eat() {
//         console.log("Animal is eating");
//     }
// }

// class Dog extends Animalls {
//     bark() {
//         console.log("Dog is barking");
//     }
// }

// const dog = new Dog();
// dog.eat();  // Inherited
// dog.bark(); // Own method

// // Multilevel Inheritance
// // A class is derived from a class, which is also derived from another class. This forms a chain.
// class Animals {
//     eat() {
//         console.log("Animal eats");
//     }
// }

// class Dog extends Animals {
//     bark() {
//         console.log("Dog barks");
//     }
// }

// class Puppy extends Dog {
//     weep() {
//         console.log("Puppy weeps");
//     }
// }

// const pup = new Puppy();
// pup.eat();   // From Animal
// pup.bark();  // From Dog
// pup.weep();  // Own method
//-------------------------------------
// Multiple Inheritance (Not  supported in JS)
// A class inherits from more than one parent class.
// ---------------------------------------------------




// class A {

//     m1() {

//         console.log(" This method is simple one  M1 ")
//     }

//     m2() {

//         console.log(" This method is simple one  M2 ")
//     }



//     m3() {

//         console.log(" This method is simple one  M3 ")
//     }


//     m4() {

//         console.log(" This method is simple one  M4 ")
//     }


// }



// class B extends A {

//     m5() {

//         console.log(" This method is simple one  M5 ")
//     }

//     m6() {

//         console.log(" This method is simple one  M6 ")
//     }



//     m7() {

//         console.log(" This method is simple one  M7 ")
//     }


// }

// class C extends B {

//     m8() {

//         console.log(" This method is simple one  8 ")
//     }

//     m9() {

//         console.log(" This method is simple one  M9 ")
//     }



//     m10() {

//         console.log(" This method is simple one  M10 ")
//     }


// }

// const obj1 = new B

// obj1.m5()  // class A
// obj1.m3()  // class B
// obj1.m8()   // class C
// -----------------------------------------

// Hierarchical Inheritance
// Multiple classes inherit from the same base class.
// class Animall {
//     speak() {
//         console.log("Animal speaks");
//     }
// }

// class Dog extends Animall {
//     bark() {
//         console.log("Dog barks");
//     }
// }

// class Cat extends Animall {
//     meow() {
//         console.log("Cat meows");
//     }
// }

// const dogg = new Dog();
// dogg.speak(); // From Animal
// dogg.bark();  // Own

// const cat = new Cat();
// cat.speak(); // From Animal
// cat.meow();  // Own

// ---------------------------
// Polymorphism 
// Polymorphism allows different classes to define methods with the same name but different behavior.

class A {


    display() {

        console.log("This Method is from Parent")
    }

    add(num1, num2) {

        console.log(num1)
        console.log(num2)
        console.log(num1 + num2)
    }

}


class B extends A {


    display() {

        console.log("This Method is from Child")
    }

    add(num1, num2, num3) {

        console.log(num1)
        console.log(num2)
        console.log(num3)
        console.log(num1 + num2 + num3)
    }

}

const raju = new A()

raju.display()  // Method Overriding 

raju.add(3, 7,)  // Method Overloading 
// =----------------------------------------


// class Animal {
//     speak() {
//         console.log("Animal speaks");
//     }
// }

// class Cat extends Animal {
//     speak() {
//         console.log("Cat meows");
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log("Dog barks");
//     }
// }

// const animals = [new Animal(), new Cat(), new Dog()];

// animals.forEach(animal => animal.speak());

// Method overriding occurs when a child class provides a new implementation of a method that is already defined in its parent class.

// This is a form of runtime polymorphism.

class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Cat meows");
    }
}

const animals = [new Animal(), new Dog(), new Cat()];

animals.forEach(animal => animal.speak());
// ================================================================


// Prototype 


class employee {

    x = 20
    m1() {

        console.log("Simple M1 Method")
    }

    m2() {

        console.log("Simple M2 Method")
    }
}

employee.prototype.y = 50


  function m3(){

        console.log("Simple M3 Method")
    }


employee.prototype.m3 = function () {

    console.log("Simple M3 Method")
}

const emp1 = new employee()

emp1.m1()
emp1.m2()

emp1.m3()

console.log(emp1.x)

console.log(emp1.y)


const emp2 = new employee()


emp2.m1()
emp2.m2()

emp2.m3()
// ============================


// class A {

//     m1() {

//         console.log("Simple M1 Method")
//     }
// }


// class B extends A {

//     m2() {

//         console.log("Simple M2 Method")
//     }
// }

// class C extends A {

//     m3() {

//         console.log("Simple M3 Method")
//     }
// }

// const  obj = new B()

// obj.m1() // A

// obj.m2() // B



// const  obj2 = new C()

// obj2.m1() // A

// obj2.m3() // C


// Prototype
// In JavaScript, every object has an internal link to another object called its prototype.
// This is part of the prototype chain used for inheritance. You can also use this to clone or extend objects.
function Car(model, color) {
    this.model = model;
    this.color = color;
}

Car.prototype.display = function() {
    console.log(`Model: ${this.model}, Color: ${this.color}`);
};

const car1 = new Car("Tesla", "Red");
car1.display(); // Model: Tesla, Color: Red

// Clone car1 (shallow clone)
const car2 = Object.create(car1);
car2.color = "Blue";
car2.display(); // Model: Tesla, Color: Blue (inherits model)


// ==============================================
// debugging


function add(n1, n2,n3){

    console.log(n1)
    console.log(n2)
    console.log(n3)
    console.log(n1+n2 +n3)
}


add(4,7,8)




// OBJECTS:

/* An object is a special type of variable that can store multiple values together in the form of key-value pairs.
Each Key(propertyname) is a String or Symbol
Each Value can be any datatype including Arrays,Functions and other objects*/

// SYNTAX:

/*objectname={

            // propertyname : propertyvalue 
                //   (Key)   : (value)
}

console.log(objectname.propertyname)*/

/* note : propertyname(key) is string or symbol and
  propertyvalue can any datatype like string,number,boolean,undefined,null include Arrays,functions and other objects
  we can write n number of properties inside the block.*/

// Example of object:

const person = {

    Name: "Vijay",
    age: 29,
    isEmployed: true,
    address: {

        city: "Bangalore",
        Nativecity: "Anantapur",
        pin: 560073

    },
    greet: function () {
        console.log("Hello!")
    }
}


console.log(person.Name)

console.log(person.isEmployed)

console.log(person.address.pin)   // this is normal way to access the propertis

// we can find the propertyname holds which datatype by using "typeof" keyword

console.log(typeof(person.address))
console.log(typeof(person.Name))
console.log(typeof(person.age))
console.log(typeof(person.greet))

// Another way to access the properties:

console.log(person['Name'])

console.log(person['address'])

// it is also possible to add more properties to an object later (even in the middle of the code)

// 2 ways there to add ,delete and edit/update

 person['Fathername'] = "Thimmarayappa"

 person.Fathername = "Thimmarayappa"

console.log(person.Fathername)

// ---------------------------------------------------

// person['Country'] = "India"    
person.country = "India"

console.log(person.country)

// --------------------------------------------------

person['continent'] = "Asia"
person.continent = "Asia"

console.log(person.country)

// ------------------------------------------------------

// for print whole object

// console.log(person)

// -----------------------------------------------------

// if you want to "deleting" properties from the object is also possible in js

delete (person.continent)

console.log(person)
// -----------------------------------------------------

// if you want editing or updating existing object properties is also possible

person['age'] = 28
person.age = 28

console.log(person)
// -----------------------------------------
person['address']['city'] = "Hyderabad"
 person.address.city = "Hyderabad"

console.log(person)


//  below script is final output of above object

let candidate = {
  Name: 'Vijay',
  age: 28,
  isEmployed: true,
  address: { city: 'Hyderabad', Nativecity: 'Anantapur', pin: 560073 },
  greet: () => {

    console.log("Hello!")

  },
  Fathername: 'Thimmarayappa',
  country: 'India'
}


// loop the object Using for…in loop

// The for…in loop is used to iterate over keys (properties) of an object.

for (let key in candidate) {
  console.log(key, ":", candidate[key]);
}

// for..in loop for only Address property

for (let key in person.address) {
  console.log("Address", key, ":", person.address[key]);
}

// ====================================================

// ex2:

menuitems = {

    menu1: "Admin",
    menu2: "PIM",
    menu3: "Leave",
    menu4: "Time",
    menu5: "Recruitment",
    menu6: "MyInfo"
 
}

for(let item in menuitems){
    console.log(item,":",menuitems[item])
}


//  in objects  we learn

// 1.Add properties (anytime)

// 2. Delete properties (delete)

// 3. Edit/Update properties



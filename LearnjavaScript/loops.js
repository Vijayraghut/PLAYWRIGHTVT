// Loops:
// loops are used to repeat a block of code multiple times without rewriting untill a condition become false

// types of loops in javascript:
// 1. for loop
// 2. while loop
// 3. do...while loop
// 4. for in loop
// 5. for of loop
// 6. foe each loop 



//  1. for loop  :- Used when you know how many times you want to run(repeat) the code.
// syntax:
// for (initialization; condition; increment/decrement){

//     // block of code or statements

// }

// 

// Ex : print 0.....to ....10 numbers  

//  for(i=0; i<=10; i++){

//     console.log(i)        // 0,1,2,3,4,5,6,7,8,9,10
//  }

// -------------------------------------------------------------
// ex-2

//   for(i=0; i<=10; i++){

//     console.log(i)  
    
//     console.log("JavaScript")
//     console.log("Java")
//     console.log("python")
//     console.log("C#")

//  }

// ----------------------------------------------------------------------------------------------

//  print even numbers 1.....10  (even numbers starts from 2 in between 1 to 10 and by adding 2 to the even number it will become even number so we use i=i+2/i+=2)


// for(i=2;i<=10;i+=2){
//     console.log(i)         // 2 4 6 8 10
// }

// -----------------------------------------------------------------------------

// disply the numbers in descending order  10 9 8 7......1


// for(i=10;i>0;i--){
//     console.log(i)       // 10 9 8 7 ......1
// }

// -----------------------------------------------------------------------------------

// If the condition in a for loop always evaluates to true, the loop will become an infinite loop.
// for(i=1;i>0;i++){
//     console.log(i)
// }


// note: in for loop we have write Initialization, condition and increment/decrement within the looping statement
// for(Initialization, condition and increment/decrement) like thise we have to write

// ============================================================================================


// while loop: Runs as long as the condition is true.
// syntax: 

//  initialization
// while(condition){
 
//     // statements (block of code)
            //  increment/decrement
// }

// -----------------------------------------------

// ex:  print 1.....10 numbers

// let i=1;   // initialization
// while(i<=10){

//     console.log(i);
//     i++                            //1 2 3 4 5 6 7 8 9 1  0
    
// }


// -------------------------------------------------------------
// ex-2

// let i=1;   // initialization
// while(i<=10){

//      console.log(i);

//     console.log("JavaScript")
//     console.log("Java")
//     console.log("python")
//     console.log("C#")
    
//     i++
   
// }
// -------------------------------------------------------------------
//  print even numbers from 1  to 20..     (2 4 6 8 10... ..)

// let i=2
// while(i<=20){
//     console.log(i)       // 2 4 6 8 10 ....
//     i+=2              //i=i+2
// }

// ----------------------------------------------------------------------

// print the numbers in descending order from 1  to 10..

// let i=10
// while(i>0){

//     console.log(i);    

//     i--;

// }

// ---------------------------------------------------
// print odd numbers from 1 to 10....

// let i=1
// while(i<10){
//     console.log(i)

//     i+=2
// }

// ---------------------------------------------------------------

// we have write Initialization, condition and increment/decrement separately in while loop
//  initialization(let i = 0 )
// while(condition){
 
//     // statements (block of code)
            //  increment/decrement  (i++/i--/i+=2....)
// }


// ===============================================================================================

// 3. do...while loop: Runs the code at least once, then checks the condition.
// syntax:
// do{

// //   block of code

// }while(condition);

// ------------------------------------

// ex: print 1 ....10 numbera

// let i = 1;
// do{
//     console.log(i);

//      i++;

// }while(i<=10);


// display the values in descendeng orders from 1 to 10...

let i = 10
do{
    console.log(i);
     i--;
}while(i>0)


// -----------------------------------------------------------------

// note : for loop and while loop execute only when the condition is true. --
// If the condition is false at the beginning, they will not run even once. --
// But do...while loop will always execute at least once, no matter whether the condition is true or false,--
// because the condition is checked only after the first execution."

// ex:

// let i = 100;

// do{
//     console.log(i);
//     i++;
// }while(i<=10)


/*    Coding Challenge Part 7: Creating & Calling A Function
Creating and calling a function

Task 1:
Write a function that calculate the BMI/ Body Mass Index
Inputs to be passed to function: weight & height
Expected output from the function: BMI
Formula to calculate BMI : weight/height^2
Call the above function and display its result in the console.

Task 2: Try writing the above function as an arrow function and make it more concise.
   */

function  calculateBMI(weight,height){
let BMI =0
    BMI = weight/height**2;
    return BMI;
}

console.log(calculateBMI(70,2))
/* ---------------------  Arrow Function      ------------------------------       */ 

let BMI2 = (weight,height)=> weight/(height*height)

console.log(BMI2(55,5,6))
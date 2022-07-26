/*Coding Challenge Part 5: Multiplication Loops
Coding challenge: Create multiplication tables of numbers 3,7 and 9

Using while do while and for loops respectively.

Tables should have multiples of numbers from 1 to 10.*/

console.log("Multiplication table for 3")
let c = 1,i=3
while(c <=10) {
console.log(c+" x " + i+ " = "+ c*i)
    c++
}

console.log("Multiplication table for 9")
for(let i=1;i<=10;i++){
    console.log(i+" x " + "9 "+ "= "+ i*9)
}
console.log("Multiplication table for 7")
i =1
do{
    console.log(i+" x " + "7 "+ "= "+ i*7)
    i++
}while(i<= 10)

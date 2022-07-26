/* 2. Using the forEach function defined for an array, find the sum of the array of numbers.
 [function add_all(arr) {...}] */
let sum = 0
 function add_all(num){
    sum += num
 }

 let num =[1,2,3,4,5]

 num.forEach(add_all)

console.log(sum)


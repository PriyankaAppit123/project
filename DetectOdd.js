/*oding Challenge Part 6: Detect Odd Numbers
Coding challenge: Arrays and loops
Given an array of random numbers, write some code to detect odd numbers from given array and then remove them
 
Task:
1. Create an array of at least 10 random numbers.
2. Detect odd numbers from it.
 */
console.log("Detecting Odd Numbers")
let odd = [1,4,7,9 ,23,65,2,32,45,79]
for(let i in odd){
    if(odd[i]% 2=== 1){
        console.log(odd[i])
    }
}


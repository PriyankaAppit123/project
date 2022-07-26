/** 4. Write a factorial function that returns the factorial of a given number, n. Make sure
 *  you return the calculated value and not just print it. [function factorial(n){...}]
 
*/
function factorial(num){
    let fact =1
    while(num>0){
         fact = num*fact
         num--
    }
    console.log(fact)
}

factorial(4)
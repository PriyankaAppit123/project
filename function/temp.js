/*    3. Write a JavaScript program to convert temperatures to and from celsius, fahrenheit. 
[ Use the formula : c/5 = (f-32)/9, where c = temperature in celsius and f = temperature in fahrenheit] */

function cel_to_fah(c){
    
let f =  (c * 9/5) + 32
console.log("celsius to fahrenheit : "+ f)
}

function fah_to_cel(f){
let c = (f-32)*5/9
console.log("fahrenheit to celsius : "+ c)
}


cel_to_fah(0)
fah_to_cel(32)
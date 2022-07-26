// string to number
console.log("string to number")
let a = " 2.5 "
console.log( typeof a , Number(a))
a = Number(a)
console.log(typeof a)

console.log()

let b = "5 yea"
console.log(Number(b))
console.log(parseInt(b))
console.log(parseFloat(b))


// boolean to number 
console.log("boolean to number ")
let c = false 
c= Number(c)
console.log(c)

 c = "String" + "String"
console.log(c)
var d = '2'-'7'
console.log(d)
console.log(" Implicit Conversion to String")
console.log('3'+ 2)
console.log('3' + null)
console.log('3' + undefined)
console.log("Implicit Conversion to Number")
console.log('2' - '3', '2' *3) 
console.log("null Conversion to Number")
console.log(null + 3,3+null,)
console.log('Non-numeric String Results to NaN')
console.log(
    'String'
    -
    'String',
    'String'*'abc',
    '2'
    +
    '3',
    2 
    *
    3
    +
    2 
    *
    4

)
console.log("undefined used with anything \n "
 ,2 + undefined, 'String' * undefined
)
console.log("String to number")
let result;
result = parseInt('20.021');
console.log(result); // 20

result = parseFloat('20.021');
console.log(result); // 20.01

result =+'20.01';
console.log(typeof result)
console.log(result); // 20.01

result = Math.floor('20.01');
console.log(typeof result)
console.log(result); // 20
v =0
v += 3
console.log(v)

/**     some more examples */

let g=+ 4
console.log(g)

 g1 =+'String'
console.log(g1)
g2 =+ false 
console.log(g2)

add = function(){
    console.log("hi") }

add()

console.log("Convert to String Explicitly")
result;
result = String(324);
console.log(result);  // "324"

result = String(2 + 4);
console.log(result); // "6"

//other data types to string
result = String(null);
console.log(result); // "null"
// using toString()
result = (324).toString();
console.log(result); // "324"

result = true.toString();
console.log(result); // "true"

console.log("Convert to Boolean Explicitly")
console.log( Boolean(2),)
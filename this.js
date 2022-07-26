var student = {
    name: "John",
    score:54,
    no :'3256678901',
    sayHi:function(){
     return this
    }
}
console.log(student.sayHi())
// here this is a student object

'use strict';
function vare(){
    console.log("hi")
    return this
}

console.log(vare())
/*---------------------------------*/
function namePerson(name) {
    console.log(name);
}
function cars1(){
    return this.name
}
var name1 = "Doug";
var obj1 = { name: "Buggati", cars: cars1};
var obj2 = { name: "Lamborgini", cars :cars1};

namePerson(name1);     // "Doug"
console.log(obj1.cars());      // "Buggati"
console.log(obj2.cars()); // Lamborgini
/*-------------------------*/
var x
this.x =2
console.log(x) // undefined


function f1() {
    return this;
 }

 // In a browser:
 //f1() === window;
 // true  // In Node:
 console.log(f1() === global); // true

/*======================*/
 function sum() {
    return this.x + this.y + this.z;
}
var maths = {
  x: 1,  y: 2,  z: 3,
get mean() {
  return (this.x + this.y + this.z) / 3;
}
};
Object.defineProperty(maths, 'sum', {
 get: sum,
 enumerable: true,
 configurable: true
});
console.log(maths.mean, maths.sum); // 2, 6


console.log("a"+"b");
console.log("a","b");
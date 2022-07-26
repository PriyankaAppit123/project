function greet(){
    console.log("hi")
}
greet()

let hi = greet
hi()
console.log(greet)// prinitng the funtion in the console 

/*==========*/
 function sum(a,b){
     console.log(a+b)
 }
let a = {
    math:sum,
}
a.math(2,3)




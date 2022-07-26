let fruits = ["Mango","Papaya","Orange","Apple","Grapes"]
fruits.push("Guava")// adding the  at the last
fruits.push("Melon")
console.log(fruits)
console.log("popped element : "+fruits.pop())
//fruits.pop() --> remove the element from the last 
fruits.push("Melon")
console.log("Shifted element : "+fruits.shift()) 
//shift() --> delete the element from the first
fruits.unshift("Mango")
console.log(fruits)
fruits.splice(1,1)// delete the element at particular location 
console.log(fruits)

var a = [1,2,3]
var b = [true,false]
fruits.concat(a).concat(b)
console.log(fruits.concat(a).concat(b))
console.log(fruits.reverse())
console.log(fruits.join(" | "))// join method acts as a separator 
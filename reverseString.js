var name =  "John"
var org = name
console.log(org)
name =  name.split("")
name = name.reverse()
name = name.join("")
console.log(name)


/* shortcut to implement reverse of a string 
console.log(name.split().reverse().join())*/
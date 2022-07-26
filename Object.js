function grade(){
    return "AB"
}

var student = {
    name: "John",
    score:54,
    no :'3256678901',
    sayHi:function(){
        console.log("hi")
    },
    marks:grade()
}
delete student.score
student.score = 99
console.log(student)
console.log(student.sayHi())
console.log(student.marks)
console.log(student["name"])
console.log(student.name)


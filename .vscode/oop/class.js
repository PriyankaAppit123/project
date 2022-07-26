class Student{
    constructor(id,name, marks){
        this.id = id;
        this.name = name;
        this.marks = marks;
    }
    display(){
        
            console.log("student id is "+this.id);
            console.log("student name is "+this.name);
            console.log("student marks is "+this.marks);
    }
    hello(){
        console.log('hello')
    }
}

let studentOne = new Student(1,'Hari',98)
let studentTwo = new Student(2,'Harsha',98)


studentOne.display()
studentTwo.display()
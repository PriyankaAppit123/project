class Member{
    constructor(id,name){
        this.id = id
        this.name = name
    }
    display(){
        console.log(" id is "+this.id);
        console.log(" name is "+this.name);
    }
}

class Student extends Member{
    constructor(id,name,marks){
        super(id,name)
        this.marks = marks
    }
    displayMarks(){
        console.log(" marks are "+this.marks);
    }
}

class Teacher extends Member{
    constructor(id,name,exp){
        super(id,name)
        this.exp = exp
    }
    displayExperience(){
        console.log("experience is "+this.exp);
    }
}


let student = new Student(1,"John",89)
student.display()
student.displayMarks()
let teacher = new Teacher(1,"Radha", 2.5)
teacher.display()
teacher.displayExperience()
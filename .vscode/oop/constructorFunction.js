function Student(name, marks){
this.name = name
this.marks = marks
this.display = function(){
    console.log('Name ' + this.name)
    console.log('Marks ' + this.marks)
}
}


let s = new Student("John",99)
s.display()


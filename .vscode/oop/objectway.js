
const studentDetails={ 
    id : 1,
    name : 'John',
    Marks :98,
    display:function (){ 
    console.log("student id is "+this.id);
    console.log("student name is "+this.name);
    console.log("student marks is "+this.Marks);
    }
}

   

studentDetails.display()




class Person
{
    constructor()
    {
        FirstName = "Ryan"
        MiddleName = "N"
        LastName = "Dahl"
        DateOfBirth = "1981-02-28"
        Company = "OpenJS Foundation"
        Salary  = 500
        IncrementPercentage =  15
    }
    Display_details(){
        console.log("full name : " , Fullname())
        console.log("Age : " + getAge(Fullname()))
        console.log("salary of three years : " + Salary(Fullname()))
``
    }
}
class Fruits 
{
    constructor()
    {
        Fruits:
         [
            "Apple",
            "Melons",
            "Banana",
            "Orange",
            "Loganberry",
            "Guava"
         ]
    }
}

let  Fullname=()=>{
    let name1 = `${.FirstName} ${obj.MiddleName} ${obj.LastName}`
    return name1
    }
    
    function getAge(Fullname){
        const  d = new Date()
          let yr = d.getFullYear()
          const d1 = new Date(obj.DateOfBirth)
          let yr1 = d1.getFullYear()
          //console.log(yr1 , yr)
          let age = Number(yr) - Number(yr1)
         console.log( "Name is ", Fullname , " and Present Age is " + age) 
    }
    
    
    
    function Salary(FullName){
        let sal = obj.Salary
        let inc = obj.IncrementPercentage
    
        let firstyr = getIncrement(sal,inc)
        let secondyr = getIncrement(firstyr, inc)
        let thirdyr = getIncrement(secondyr, inc)
        
    console.log(FullName  +" First year salary is  : " + firstyr)
    console.log(FullName+ "  Second year salary is : " + secondyr)
    console.log(FullName +"  Third year salary is  :" + thirdyr)
    
    }
    
    
    function getIncrement(sal, per){
       return sal + (sal* (per/100))
    }
    let  AddFruits=()=>{
        console.log(obj.Fruits)
         obj.Fruits.push("RedCherry", "strawberry")
        console.log("Fruits are : " ,obj.Fruits)
        
    }
    function ChangeCompany(){
       let c =  obj.Company.replace("OpenJS Foundation", "OpenJS", "Appit")
    
        console.log("Company name is : "+obj.Company)
        }
    
    let arrangeFruits = ()=> 
     console.log(obj.Fruits.sort())
    
    
    let del = ()=> {
        console.log("Before Deleting : ", obj.Fruits)
        let delValue = delete obj.Fruits[1]
        
        console.log("after deleting 2nd element :  " ,obj.Fruits)
    }
    
    
    console.log("Fullname is  :" +Fullname())
    getAge(Fullname())
    Salary(Fullname())
    AddFruits()
    ChangeCompany()
    arrangeFruits()
    del()


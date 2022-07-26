// hoisting works with the variables and functions


student = {
    name:"Dany",               // definition
    score:76,
    grade:function(){
        console.log("A");
    }
};

student.grade();
var student            // declaration


/* ----------------------*/
 
add(2,3)
function add(a,b){
    console.log(a,b);
}

/*---------------*/
x =12
console.log(x)
var x 

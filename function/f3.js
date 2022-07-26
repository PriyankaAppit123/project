/* 1. Write a javascript function named is_integer which checks if the passed argument is an integer. You can 
use any mathematical operator or functions defined in the Math object.*/

function is_integer(num){
    if(typeof num === 'number'){
        console.log("yes")
    }
    else{
        console.log("no")
    }
}

is_integer(4)
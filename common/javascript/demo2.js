let num = Number(prompt("Enter any number between 5 to 100"))

 if(num >= 5 && num <= 100){
     while(c <=100){
     if(num%3 == 0 && num % 5 == 0){
         alert(num + " is divisible by 3 and 5")
     }
     else{
         alert(num + " is not divisible by 3 and 5")
     }
 }
}else{
     alert(num + " is not in the range of 5 to 100")
 }

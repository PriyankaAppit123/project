
 function sorting(a,b){
    return (a-b)
}

var a = [1,34, 56, 11,3,2,7]
console.log(a.sort(sorting))
/*
1-34 = -33
34-56 = -22
56-11 = 45        ------>        -33,-22,45, 8, 1,-5                      34  7  1  2    3    11  56 
11-3 = 8                         -33, -67, -11, -22, -25,-27,-34 --->   -67,-34,-33,-27, -25,-22,-11 
3-2 = 1                          1,2,3,7,11,34,56                        
2-7 = -5
*/

a = 2

switch(a){
    case 1: console.log('hi');
            break
   case 2:
          console.log('bye');
          break

    default:
          console.log('goodbye');

          
}

function Square(num)
{
    return num *num
}

function  tot(a,b){
   let total =   Square(a)*Square(b)+2*a*b
    console.log(total)
}

tot(2,3)

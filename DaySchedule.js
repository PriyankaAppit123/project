/*Write a script using if else statement to Print day schedule like 
(Morning,Noon, Afternoon, Evening, Night,Midnight) based on time..*/

var time  = 3


if( time>=5 && time<12){
    console.log("Morning");
}
else if(time == 12){
    console.log("Noon")
}
else if(time>=12 && time<17){
    console.log("Afternoon")
}
else if(time>=17 && time<20){
    console.log("Evening")
}
   
 else if(time== 24){
    console.log("MidNight")
}
else {
    console.log("Night")
}

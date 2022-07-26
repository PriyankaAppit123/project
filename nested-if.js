/* Coding Challenge Part 4: Nested If
Coding challenge: nested if

Here is the basic criteria required to be a pilot

Minimum 50% marks in high school.
Age requirements:

    >= 16 for student pilot license.
    >=17 for private pilot license.
    >=18 for commertial pilot liennse.

Minimum 70% marks in exam conducted by aviation department.

Task:

Depending on above criteria, check if a student qualifies.

Check for the criteria in the following order:
1. High school marks.
2. Aviation exam marks.
3. Age.

If the criteria matches, send an appropriate response.
If some of the criteria does not match, respond accordingly.
Display a message such that a student should understand why he/she is rejected.
*/

 let HighSchmarks = 56, age = 17, Aviation_marks= 120

 if(HighSchmarks>=50){
    if(Aviation_marks >= 70){
        if(age >= 18){
            console.log("Qualified for commercial  pilot licence")
        }
        else if(age >= 17){
            console.log("Qualified for private pilot licence")
        }
        else if(age >= 16){
        console.log("Qualified for student pilot licence")
        }
        else{
          console.log("you are not qualified! your age is less than 16 ")
       }
    } else{
        console.log(" you are not qualified! you scored less than 70 in the aviation exam")
    }
    
 }else{
     console.log( " you are not qualified! you scored less than 50% in high school")
 }
   
 
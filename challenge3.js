/* Coding Challenge Part 8: Callbacks
Callbacks

Create two functions

1st function: Write a function that calculates tax, this function should accept tax percentage and salary and 
calculate the tax on given salary as per the percentage.
2nd function: Write a function to calculate salary, it accepts three parameters.

Parameter 1: hours worked.
Parameter 2: hourly rate.
Parameter 3: A callback function that calculates tax on salary.
Firstly, calculate the salary earned by multiplying hours worked with hourly rate.

Then pass this salary to the callback function along with the tax percentage to calculate tax to be 
paid on earned salary.
Also calculate the salary in hand after paying taxes.
Program should display the following output:

Salary earned.
Tax calculated on earned salary.
Salary in hand after paying taxes.
*/


var calculateTax=(rate, sal)=> sal *rate/100
var calSalary =(hourlyRate,hoursWorked,taxPercentage)=> {
    let salary = hoursWorked*hourlyRate
    let taxPaid = taxPercentage(30, salary)
    let AfterTaxPaid = salary- taxPaid
    console.log("salary calculated as per hourly rate : "+ salary)
    console.log("Tax calculated on earned salary : "+ taxPaid)
    console.log("Salary in hand after paying taxes : "+AfterTaxPaid )

}

  calSalary(40,100, calculateTax)
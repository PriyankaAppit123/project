/*Coding Challenge Part 9: Global Variables & Functions
Global variables & functions

Design a banking system to emulate withdrawal and deposit of money into a person’s account.

Create variables to hold account balance and account number.
Create a function deposit which accepts the amount to be deposited and adds it up to the account balance.
Upon deposit, it also displays a message about the amount deposited and the updated balance.
Create another function called withdraw, which accepts an amount to be withdrawn and deducts that amount form the main balance.
Upon deducting the amount, it also displays a message about the amount deducted as well as the updated balance.

This function also checks if sufficient funds are available before making a transaction.

If the withdrawal amount exceeds the balance amount, the function should display an error message.

 */

let AccountNo = 23335,balance=200
let deposit = (depositAmount)=> {
    balance = balance+ depositAmount
console.log(`Deposited Amount is  ${depositAmount} in account number ${AccountNo} and balance Amount is ${balance}`)
}
let withdraw=(withdrawAmount)=>{ 
       if(withdrawAmount>balance){
        console.log("balance is insufficient")
    }else{
    balance = balance - withdrawAmount
   console.log(`Deducted Amount is  ${withdrawAmount} in account number ${AccountNo} and balance Amount is ${balance}`)
    }


}

deposit(100)
withdraw(300)
function transact(transactionID, time){
    setTimeout(()=>{
        console.log("Transaction : "+transactionID + " is complete")
    },time)

}
console.log("transaction details :")
transact(1, 3000)
transact(2, 1000)
  // it is not in order execution 
  // so in order to make in order , we are using callback 
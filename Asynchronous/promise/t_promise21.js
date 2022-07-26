
function transact(transactionID, time){
    setTimeout(()=>{
        console.log("Transaction : "+transactionID + " is complete")
    },time)

}
function allTranscation()
{
    console.log("transaction details :")
transact(1, 3000,()=>{
    transact(2, 1000,()=>{  // callback queue
        transact(3,2000)
    })
})


}

allTranscation()
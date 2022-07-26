function myTransact(transactionID , time){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
     console.log("Transaction : " + transactionID+ " is completed")
     resolve()
    },time)
})
}


function allTranscation(){
    myTransact(1,3000)
    .then(() => myTransact(2,1000))
    .catch(()=>console.log("transcation failed"))                  
    .then(()=>myTransact(3,2000))

}

allTranscation()
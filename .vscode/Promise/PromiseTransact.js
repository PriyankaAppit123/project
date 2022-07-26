function transact(transactID,time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Transaction :"+transactID+" is complete")
            resolve()
        },time)
    })
}

function allTansactions(){
    transact(1,3000)
    .then(()=>transact(2,1000))
    .then(()=>transact(3,2000))// promise chaining
}

allTansactions()
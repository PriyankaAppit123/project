/*function transact(transactID, time){
    setTimeout(()=>{
        console.log("Transaction "+transactID + " is complete")
    },time)
}


function allTansactions(){
    transact(1,3000)
    transact(2,1000)
    transact(3,2000)
}

allTansactions()
*/
function transact(transactID, time,callback){
    setTimeout(()=>{
        console.log("Transaction "+transactID + " is complete")
        callback()
    },time)
}


function allTansactions(){
    transact(1,3000,()=>{
        transact(2,1000,()=>{
            transact(3,2000,()=>{

            })
        })
    })
}

allTansactions()

// to handle errors which makes callback hell which
// cannot be solved easily 
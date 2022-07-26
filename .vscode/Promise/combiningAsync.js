// to combine asynchronous operations using promise
/* validating the user */


let balance = 1000
function validate(){
    let username = 'admin'
    let password = 'admin'
   
    return new Promise((resolve, reject)=>{
        if(username==='admin'& password === 'admin'){
            resolve(balance)
        }
        else{
            reject('Invalid username and password, please re-enter')
        }
    })
}

function withdraw(amount){
    let withdrawAmount = 2000
    return new Promise((resolve,reject)=>{
        if(balance > withdrawAmount){
            balance -= withdrawAmount
            resolve(balance)
        }
        else{
            console.log("balance is insufficient")
        }
    })


}
validate()
.then((balance)=>{
    withdraw()
    .then((balance)=>console.log("the  new balance :" + balance))
    .catch((message)=>console.log(message))
})
.catch((message)=>console.log(message))
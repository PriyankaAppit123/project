function validate(){
    let username = "admin"
    let password = "admin"
    let balance = 1000
    return new Promise((resolve, reject)=>{
        if(username == "admin" && password == "admin"){
           console.log("Login Sucessfull")
            resolve(balance)
        }else{
            reject("Username and password are invalid")
            
        }
    })
}

function withdraw(balance){
    let withdrawAmount = 1200
     return new Promise((resolve, reject)=>{
         if(balance > withdrawAmount){
               balance -= withdrawAmount
               resolve(balance)
         }
         else{
             reject("Insufficent balance")
         }
     })
}

validate()
.then((balance)=>{
    withdraw(balance)
    .then((balance)=>console.log("the new balance is " + balance))
    .catch((message)=>console.log(message))
    
})
.catch((message)=>console.log(message))
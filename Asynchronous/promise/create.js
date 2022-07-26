const  p = new Promise((resolve, reject)=>{
    let status = true
    if(status){
        resolve('sucess')
    }
    else{
        reject('failed')
    }
})

p
.then((message)=>{
    console.log("Login " + message)
})
.catch((message)=>{
    console.log("Login "+ message)
})
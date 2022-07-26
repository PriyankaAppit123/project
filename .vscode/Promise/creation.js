let  p = new Promise((resolve,reject)=>{
 let status = true
 if(status){
     resolve('Success')
 }else{
     reject('Failed')
 }
})
p.then((massi)=>{
    console.log('Login '+massi)
})



.catch((massi)=>{
    console.log('Login '+massi)
}) 
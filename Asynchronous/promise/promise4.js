let p =  new Promise((resolve=>{
    resolve('sucess')
}))
p.then((message)=>{
    console.log(message)
})
p.catch((message)=>{
console.log(err)
})
const greet = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('foo');
      }, 300);
    });
    
 greet
      .then((message)=>{
          console.log(message)
      })
     .catch((message)=>{
         console.log("not success")
     })


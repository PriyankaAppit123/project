const doSomethingAsync = () => {
    return new Promise(resolve => {
        console.log("do something ")
      setTimeout(() => resolve('I did something'), 1000);
    });
  };

  doSomethingAsync()
  .then((msg)=>{
    console.log(msg)
    
  })
  console.log("nothing done")
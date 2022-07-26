const doSomethingAsync = () => {
    return new Promise(resolve => {
        console.log("do something  async")
      setTimeout(() => resolve('I did something'), 1000);
    });
  };


const doSomething = async () => {
    console.log('do something')
    console.log(await doSomethingAsync());
  };

  
  doSomething()
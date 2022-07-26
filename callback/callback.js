
function greeting(name) {
    console.log('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = 'Harry'
    callback(name);
  }
  
  processUserInput(greeting);
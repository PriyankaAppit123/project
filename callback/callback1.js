function greet(name){
    console.log(name)
}

function hi(hi){
    console.log("My name is ")
    let name = "John"
    hi(name)
}

hi(greet)
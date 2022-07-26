function timer(){
    console.log("Happy Birthday");
}
let time = 5
let t = document.querySelector('h1')
let id = setInterval(function(){
    time -= 1
    t.innerText = time
    console.log(time);
    if(time == 0){
        clearInterval(id)
        t.innerText = 'time up!'
    }
},1000);
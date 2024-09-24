// setTimeout(function(){
//   console.log("Hello TimeOut")
// }, 2000)

// console.log("Hello");

// function greet(){
//     console.log("Hello greet")
// }
// setTimeout(greet, 1000)


var hour =0;
var minute =0;
var second =0;
var counter =0;

var timer = false;

function start(){
    timer = true
    stopwatch()
}
function stop(){
    timer = false;
}
function restart(){
    timer = false

    document.getElementById("hr").innerHTML = "00"
    document.getElementById("min").innerHTML = "00"
    document.getElementById("sec").innerHTML = "00"
    document.getElementById("count").innerHTML = "00"

}
function stopwatch(){
    if(timer == true){
        counter++
        setTimeout(stopwatch, 10)
        document.getElementById("count").innerHTML = counter;

        if(counter == 100){
            second++
            document.getElementById("sec").innerHTML = second;
            counter= 0
        }
        if(second == 60){
            minute++
            document.getElementById("min").innerHTML = minute
            second = 0
        }
        if(minute == 60){
            hour++
        document.getElementById("hr").innerHTML = hour
            minute = 0
        }
        if(hour<10){
            document.getElementById("hr").innerHTML = "0" + hour
        }
        if(minute<10){
            document.getElementById("min").innerHTML = "0" + minute
        }
        if(second<10){
            document.getElementById("sec").innerHTML = "0" + second
        }

    }

}

// for(var i=0; i<=10; i++){
//     document.write(i,") I love you too <br>")
// }


// for(var i=10; i>0; i--){
//     document.write(i, "<br>")
// }

// for(var i =1; i<=10; i++){
//     document.write("2" + " x " + i + " = " + 2*i +"<br>")
// }

// var city = ["khi", "isl", "lhr", "psh"]
// document.write(city)
// document.write(city[0] ,"<br>")
// document.write(city[1] ,"<br>")
// document.write(city[2] ,"<br>")
// document.write(city[3] ,"<br>")

                 //i<=4
// for(var i =0 ; i<city.length ; i++){
//     document.write(city[i], "<br>")
// }


var city = ["khi", "isl", "lhr", "psh"]
var userCity = prompt("Enter you city:")
var matchFound = "no";
// document.write(city)

for(var i = 0; i<city.length; i++){
    if(city[i]===userCity){
        matchFound="yes"
        alert("City found")
        break;
    }
}

if(matchFound=="no"){
   alert("city not found")
}

    










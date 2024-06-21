// var per = 70.2;
// document.write(Math.round(per))
// document.write(Math.ceil(per))
// document.write(Math.floor(per))

// document.write(Math.random()*2);


//_____________________Toss Game_______________________________________
// var player1= prompt("Enter Heads Name:")
// var player2= prompt("Enter Tails Name:")
 
// var toss = Math.random()*2
// var chToss = Math.floor(toss)

// // document.write(chToss)

// if(chToss === 0){
//     document.write(player1+ " heads won")
// }else{
//     document.write(player2+ " tails won")
// }

//____________________Pasword Generator___________________________

// var randomValues = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_-+={[}]:;'<,>.?/"
// var password = "";

// for(var i = 0; i < 10; i++){
//     var randomNumber = Math.floor(Math.random()* randomValues.length)
//     password += randomValues[randomNumber]
// }
// document.write(password)

// var x = 50;
// var y = 50.505028;
// // var total = parseInt(x) + parseFloat(y)
// document.write(total)

// document.write(String(x)+50)
// document.write(x.toString() + 50)


// document.write(y.toFixed())



var date = new Date()
var day = date.getDay()
document.write(day)
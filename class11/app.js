// var myName = "UmRa"
// document.write(myName.toLowerCase())

// var cities = ["Karachi", "Lahore", "Islamabad", "Hyderabad"]

// var userCity = prompt("Enter your city name:")

// var pro1= userCity.slice(0,1).toUpperCase()
// var pro2= userCity.slice(1).toLowerCase()
// var userCity = pro1+pro2
// var flag = false
// // document.write(userCity)

// for(var i=0; i<cities.length; i++){
//     if(userCity === cities[i]){
//         flag=true
//         alert(userCity+ " is one of the cleanest cities.")
//     }
// }
// if(flag==false){
//     alert(userCity+ " is not the cleanest city")
// }






// var students = ["Sana", "Sara", "Saba", "Zara","Tara", "Sana"]
// // var myName = "Umra"
// document.write(students.lastIndexOf("Sana"))

var str = "Is this World War II happening Is World War II?";
// document.write(str.indexOf("Is"));
// document.write(str.lastIndexOf("Is"));
// document.write(str.charAt(10));

// for(var i=0; i<str.length; i++){
//     if(str.charAt(i)=="?"){
//         alert("Question mark found")
//     }
// }
// document.write(str.replace("World War II", "Second World War"))
document.write(str.replace(/World War II/g, "Second World War"))










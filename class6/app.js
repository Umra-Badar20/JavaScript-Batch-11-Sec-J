// var province = prompt("Enter your province?");
// if(province === "sindh"){
//     document.write("Welcome to Sindh")
// }else if(province=== "punjab"){
//     document.write("Welcome to Punjab")
// }else{
//     document.write("Come to Sindh")
// };



// var userResidence = prompt("Where do you live?");
// var userQualification = prompt("What is your Qualifivcation?");
// var userSkill = prompt("Which language do you know?");

// var requiredResidence ="karachi";
// var requiredQualification ="BSCS";
// var requiredSkill ="javascript";

// if(userResidence===requiredResidence){
//     if(userQualification===requiredQualification){
//         if(userSkill===requiredSkill){
//             alert("You are eligible")
//         }else{
//             alert("Javascript prh k ao")
//         }

//     }else{
//         alert("BSCS krlo")
//     }

// }else{
//     alert("Karachi ajao")
// }


var pass = "password.123"
var userPass = prompt("Enter your password")
 
if(userPass===""){
    alert("Please enter your password") 
}else{
if(userPass===pass){
alert("“Correct! The password you entered matches the original password")
}else{
alert("“Incorrect password”")
}
}
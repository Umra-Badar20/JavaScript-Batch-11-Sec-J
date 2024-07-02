// var str = "0"
// console.log(str.charCodeAt(0))

//____________________________Pasword Validator__________________________________________
//a-z = 97 - 122
//A-Z = 65 -90
//0-9 = 48 - 57

//umra.123
// var password = prompt("Enter a password:")
// if (password.length < 6) {
//     alert("Password must be atleast 6 characters long!")
// } else {
//     if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
//         alert("Password must not start from number")
//     } else {
//         var hasAlphabet = false;
//         var hasNumber = false;
//         for (var i = 0; i < password.length; i++) {
//             var charCode = password.charCodeAt(i)
//             if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//                 hasAlphabet = true;
//             } else if (charCode >= 48 && charCode <= 57) {
//                 hasNumber = true;
//             }
//         }
//         if (hasAlphabet && hasNumber) {
//             alert("Valid Password")
//         } else {
//             alert("Password must contain both alphabet and numbers!")
//         }
//     }
// }



// var count = 1;

// function abc(){
//     count++ //1
//     alert(count)//2
// }
// abc()

// var count = 1;
// function abc(){
//     count++ //1
//     return count//2
// }
// alert(abc())


// var count = 1;
// function abc(){
//     for(var i=1; i<=5; i++){
//         count++
//         console.log(i, count)
//     }
// }
// abc()


// function checkAttendance(student) {
//     var attendance = [1, 2, 4, 6, 9, 10]
//     if (attendance.indexOf(student) !== -1) {
//         return "Present"
//     } else {
//         return "Absent"
//     }
// }
// console.log(checkAttendance(5))
// console.log(checkAttendance(2))

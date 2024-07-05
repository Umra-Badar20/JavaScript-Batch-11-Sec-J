// function calculator(){
//     var num1 = +prompt("Enter the num 1");
//     var operator = prompt("Enter the operator i.e +, -, *, /")
//     var num2 = +prompt("Enter the num 2");

//     if(operator === "+"){
//       return  num1 +num2
//     }else if(operator === "-"){
//         return  num1 - num2
//     }else if(operator === "*"){
//         return  num1 * num2
//     }else if(operator === "/"){
//         if(num2 === 0){
//             return "Error: Division by zero"
//         }else{
//             return  num1 / num2
//         }
//     }else{ 
//         return "invalid operator"

//     }

// }
// alert(calculator())



// function factorial(){
//     var num = +prompt("Enter a number:")

//     if(num < 0){
//         alert("Error: Factorial is not defined for negative numbers")
//     }else{
//         var result = 1;
//         for(var i = 2 ; i <= num ; i++){
//             result*=i // (result= result * i)  
//         }
//         alert("The factorial of "+ num +" is " + result)
//     }
// }
// factorial()
//result= result * i
//1 * 1 = 1
//1 * 2 = 2
//2 * 3 = 6
//6 * 4 = 24
//24 * 5 = 120


// function calculateHypotenuse(){
//    function calculateSquare(x){
//     return x * x
//    }
//    var base = +prompt("Enter the base of a right angle triangle:")
//    var perpendicular = +prompt("Enter the perpendicular of a right angle triangle:")

//    var hypotenuse = Math.sqrt(calculateSquare(base)+ calculateSquare(perpendicular))

// alert("The hypoteneus of right angle triangle with base "+ base+ " and perpendicular " +perpendicular+ " is "+ hypotenuse)
// }
// calculateHypotenuse()



// Arguments as variables
// var width = 20;
// var height = 10;

// function calculateArea(w, h){
//     return w * h
// }
// alert(calculateArea(width, height))
if(true){
    num= 3
}


function sum(){
    var num = 2
    console.log(num)
}

sum()
console.log(num)
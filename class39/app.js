// //Primitive Data Types
// let num1 =5;
// let num2 = num1
// console.log(num1);
// console.log(num2);
// num1++
// console.log(num1); //6
// console.log(num2); //5
// //Non Primitive Data Types
// let arr1 = [1,2,3]
// let arr2 = arr1
// console.log(arr1);
// console.log(arr2);
// arr1.push(4)
// console.log(arr1); //[1,2,3,4]
// console.log(arr2); //[1,2,3,4]

//Callback Functions
function myFunc2(){
    console.log("I am func 2");
}
function myFunc(Callback){
  console.log(Callback);
  Callback()  
}
myFunc(myFunc2)
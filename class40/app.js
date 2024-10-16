// //Function Declaration
// function myFunc(name){
//     console.log("Hello "+ name);
// }
// myFunc("Function Declaration")
// //Arrow Function
// myFunc=(name)=>{
//     console.log("Hello "+ name);
// }
// myFunc("Arrow Function")
// //Function Expression
// var myFunc =function(name){
//     console.log("Hello "+ name);
// }
// // myFunc1("Function Expression")
// const funcOutput = myFunc
// funcOutput("Function Expression")
// // console.log(funcOutput);
//________________________________HigherOrderFunction
// Function returning Function
// function outerFunction(){
//     function innerFunction(){
//         console.log("Hello World"); 
//       }
//   return innerFunction
// }
// outerFunction()
// const ans = outerFunction()
// ans()
//____________________Clousers
// function hello(x){
//     const a = "varA"
//     const b = "varB"
//     return function(){
//         console.log(a,b,x);
//     }
// }
// const ans = hello("arg")
// ans()



// function calculatePower(exp){
//     return function(base){
//         return base ** exp
//     }
// }
// const cube = calculatePower(3)
// console.log(cube(5));//8

// function firstFunc(){
//     const firstVar = 10
//     function secondFunc(){
//         const secondVar =20
//         function thirdFunc(){
//             const thirdVar = 30
//             console.log(firstVar,secondVar,thirdVar);    
//         }
//         return thirdFunc
//     }
//     return secondFunc
// }
// const ans = firstFunc()//return secondFunc
// const finalAns = ans() //return thirdFunc
// finalAns()



//________________________Ternary Operator
// let age = 14
// let drink;
// if(age>=5){
//     drink = "Tea"
// }else{
//     drink = "Milk"
// }
// console.log(drink);

// let drink2 = age >=5 ? "Tea ": "Milk"
// console.log(drink2);

//Type coercion
// console.log(true + 1)


//____________Type of
// const arr = [1,2,3]
// const obj = {a:1, b:2}
// // console.log(typeof arr);
// // console.log(typeof obj);

// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));


//Boolean Method
// false
// 0
// "" (Empty String)
// null
// undefined
// NaN
// console.log(Boolean("false"));

//_______________OBJECT FREEZE
// const person = {
//     name : "Umra",
//     class: 8
// }
// // Object.freeze(person)
// person.name = "Bushra"
// person.gender = "Female"
// delete person.class
// console.log(person);

// let person2 = Object.assign({},person) //Shallow Copy Of Object
// console.log(person2);


// ______________Array Methods
//_____________For Each
// var arr = [1,2,3,4,5]
// function multiplyBy2(num,index,arr){
//     console.log(num*2, "index is ",index,"Array is ", arr);
// }
// arr.forEach(multiplyBy2)


// const arrayLike = {
//     length : 3,
//     0 : 2,
//     1 : 3,
//     2 : 4,
//     3 : 5
// }
// Array.prototype.forEach.call(arrayLike, (x)=> console.log(x))

//________________Map
// const arr = [1,2,3,4]
// const mapArr = function(num){
//     // console.log(num*num);
//     return num * num
// }
// const squareArr = arr.map(mapArr)
// console.log(squareArr);

// ___________Find
var users = [
    {id: 1, name: "Umra"},
    {id: 2, name: "Wajeeha"},
    {id: 3, name: "Sana"}
]
const findUser= users.find(user =>{
   return user.id===2 //returns the value of the first element that passes a test
})
console.log(findUser);
//_________Every
const products = [
    {productId:1, productName: "Laptop", price: 45000},
    {productId:2, productName: "Mobile", price: 25000},
    {productId:3, productName: "Watch", price: 15000},
]
const productsPrice = products.every(product => product.price <= 50000) //returns true if the function returns true for all elements
// const productsPrice = products.every(product => product.price <= 30000) //returns false if the function returns false for one element
console.log(productsPrice);







//__________________Filter
var arr = [1, 2, 3, 4, 5];
const evenArr = arr.filter(num => num % 2 === 0);
console.log(evenArr);// creates a new array filled with elements that pass a test provided by a function
//__________________Reduce
const sum = arr.reduce((accumulator, currentValue)=>{
   return accumulator+currentValue //returns a single value: the function's accumulated result
},100/*initial value*/)
console.log(sum);
//accumulator    CurrentValue    return
    // 100           1             101
    // 101           2             103
    // 103           3             106
    // 106           4             110
    // 110           5             115

const myarr = [1,2,3]
//includes(value, indexFrom)
console.log(myarr.includes(1,2));//returns true if an array contains a specified value, starting from a specified index


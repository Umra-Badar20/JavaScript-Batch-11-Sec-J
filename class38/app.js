// var userName;
// userName= "Umra";
// let myName = "Fatima";
// const firtsName = "Hanifa";
// // let myName; Can't redeclare
// myName = "Anila" // Updated
// // const firtsName ; Can't redeclare
// firtsName = "laraib";// Can't Updated
// console.log(firtsName);
//_____________________________ Variable Scoping____________________
// let c =300
// let b = 200;
// if(true){
//     var a = 10 // Global Scope
//     let b = 20 // Block Scope
//     const c = 30
//     // let c =300

//     console.log(a,b,c);
// }
// console.log(a);
// console.log(b);
// console.log(c);
// function myFunction(){
//     var a = 1000;
//     let b = 2000;
//     const c = 3000;
//     // console.log(a,b,c);
// }
// myFunction()
// console.log(a);
// console.log(b);
// console.log(c);
// {
//     var a = 1000;
//     let b = 2000;
//     const c = 3000;
//     console.log(a,b,c);  
// }
// console.log(a);
// console.log(b);
// console.log(c);


//__________________________Destructuring_____________________
// _____________________Array Destructuring
// let arr = [1,2,3]
// // let a = arr[0] // Old Method
// // console.log(a)
// let [a,b,c] =arr
// console.log(a,b,c)

//___________________Object Destructuring
// let {a,b} = { a:1, b:2}
// // console.log(a,b);
// let obj = {
//     name : "Umra",
//     class : 9
// }
// console.log({...obj,name : "Kainat"});
// console.log({name : "Kainat", ...obj}); //Do not update the values

//______________________Spread Operator___________
// var arr = [1,2,3,4,5,6,7,8,9]
// var [a,b, ...rest] = arr
// console.log(a,b,rest);

// let arr = [1,2,3]
// function sum(a,b,c){
//     console.log(a+b+c);  
// }
// sum(...arr)//Rest Parameter


// let arr= [1,2,3,4,5,6,7]
// function unknownNumOfArguments(a,b,...rest) {
//     console.log(a,b,rest);
    
// }
// unknownNumOfArguments(...arr)
// unknownNumOfArguments(1,2,3,4,5,6,7,8,11,2,33)

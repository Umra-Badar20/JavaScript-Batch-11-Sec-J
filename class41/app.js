const numbers = [1,2,3,4]


for(let num  of numbers){
    console.log(num);
    
}

const obj = {
    userId :78,
    userName:"laiba",
    phoneNum : 9823982463,
}

console.log(obj["userId"]);


let keys = Object.keys(obj)

for(let key of keys){
    console.log(obj[key]);
    
}

for(let key in obj){
    console.log(obj[key]);
    
}

iterator

const names = [ "saira","bushra","shabana","shapater"]

let iterator = names[Symbol.iterator]()
 
 console.log(iterator.next());
 console.log(iterator.next());
 console.log(iterator.next());
 console.log(iterator.next());
 console.log(iterator.next());
 console.log(iterator.next());
 console.log(iterator.next());
 console.log(iterator.next());
 console.log(iterator.next());



Generator

function *abc(){
  yield console.log("hello");
  yield console.log("hello friends chai pelo");
  yield console.log("for real");
  
 return "returning"
}


let generator = abc()
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());


// Optional chaining

const shabana={
  location:"korangi",
  age:20,
  skills:["one cycling","wearing abaya"],
  street:{
   galeNO : 420,
   phoneNUm : "jb milao jb bnd"
  }
}

console.log(shabana?.street?.phoneNUm?.zong?.sim1);



import {ourClass,modules} from "./file1.js"
import  abc from "./file1.js"

console.log(abc);
console.log(ourClass,modules);




// Promises

let meetingPromise = new Promise((resolve,reject)=>{


    setTimeout(()=>{

        let weatherCondition = "barish horhe hai"
    },1500)


if(weatherCondition == "barish horhe hai"){
    reject("dosre din chle jaengen")
}

else{
    resolve("hurrahhhh hm jare hain")
}

})

meetingPromise.then((message)=>{
console.log(message);

}).catch((error)=>{
    console.log(error);
    
})





console.log("running");
setTimeout(()=>{
console.log("lo me agya");

},1000)

 console.log("hello");
 

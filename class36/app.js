// var myObj = {
//     fname : "Saira" ,
//     lname : "Batool",
//     userLOgedIn : true ,
//     class : 2,
//     myfunction : function(){
//         return this.fname + this.lname
//     },
//     myArray : ["sat","sun"],
//     myHome :{
//         city : "karachi"
//     }
// }
// console.log(myObj.myArray[0]);

// console.log(myObj.myHome.city);
// console.log(myObj.myHome.city="Islamabad");

// console.log(myObj.myfunction());

// console.log(myObj);

// myObj.fname = "Sana"
// console.log(myObj);
// delete myObj.userLOgedIn
// console.log(myObj);

// var propertyExist = "class" in myObj
// console.log(propertyExist);

// for (var key in myObj) {
//         console.log(myObj[key]);
// }


// var studentData={
//     fname:'Ayesha',
//     lname:'Enayat',
//     rollNo:45
// };
// var studentData={
//     fname:'Ayesha',
//     lname:'Enayat',
//     rollNo:77
// };

// function StudentData(fname,lname,rollNo){
// this.firstname =fname,
// this.lastname=lname,
// this.rollNumber=rollNo

// };
// StudentData.prototype.fullName=function(){
//     return `${this.firstname} ${this.lname}`;
// };

// var student1= new StudentData('Ayesha','Enayat',67);
// console.log(student1);
// var student2= new StudentData('Amna','attaria',77);
// console.log(student2);
// console.log(studentData.fullName);
// var fname = "Ayesha"
// var lname = "Enayat"
// console.log(`my first name is ${fname} my last name ${lname}`)

var fruit1 = "Apple"
var fruit2 = "Mango"

document.getElementById("container").innerHTML=`
  <ul>
   <li>${fruit1}</li>
    <li>${fruit2}</li>
 </ul>`




 

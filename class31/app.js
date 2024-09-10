function Employee(fname, lname, salary){
    this.fname = fname;
    this.lname = lname;
    this.salary = salary;
}
Employee.prototype.fullName = function(){
    return `${this.fname} ${this.lname}`
}
var employee1 = new Employee("Saira", "Batool", 100000);
var employee2 = new Employee("Hani", "Irfan", 1000000);
// console.log(employee1, employee2);
// console.log(employee1.fullName());
// console.log(employee2.fullName());
// console.log(employee1.hasOwnProperty("fname"));
// console.log(employee1.hasOwnProperty("fullName"));
// console.log("fname" in employee1);
// console.log("fullName" in employee1);
// console.log("isPrototypeOf" in employee1);
console.log(Object.keys(employee1));
console.log(Object.values(employee1));
// console.log(employee1["fname"])
var keys = Object.keys(employee1)
var values= Object.values(employee1)
console.log(Object.entries(employee1));

for(var i = 0; i<keys.length; i++){
    // console.log(keys[i] +":"+ values[i]);
    // console.log(keys[i] +":"+ employee1[keys[i]]);   
}


// var obj= {
//     "name" : "umra",
//     "salary" : "10"
//  }

var strObj =JSON.stringify(employee1)
console.log(strObj);
var obj = JSON.parse(strObj)
console.log(obj);

localStorage.setItem("name","umra")
localStorage.setItem("employee",JSON.stringify({name : "umra"}))
console.log(localStorage.getItem("employee"));






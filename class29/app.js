// console.log(document.head);
// var employee = {
//     fname : "Umra",
//     lname : "Badar",
//     email : "umrabadar@gmail.com",
//     salary : 50000,
//     skills : ["Html", "CSS", "JS"],
//     fullName : function(){
//         return `${this.fname} ${this.lname}`
//     },
//     living : {
//         city : "karachi",
//         country : "Pakistan"
//     }
// }
// delete employee.fullName
// delete employee.skills
// delete employee.living
// for(var key  in employee){
//     document.write(key +" : " +employee[key] +" <br>")
// }
// document.write(employee)
// console.log(employee);
// employee.salary = 20000
// console.log(employee.fullName())
// console.log(employee.living.city);
// console.log("salary" in employee)
var itemsArray = [
    {name:"juice",price:"50", quantity:"3"},
    {name:"cookie",price:"30", quantity:"9"},
    {name:"shirt",price:"880", quantity:"1"},
    {name:"pen",price:"100", quantity:"2"}];
    for(var key in itemsArray){
        var items = itemsArray[key]
        // console.log(items)
        var itemPrice = items.price * items.quantity
        console.log(` The price of ${items.name} is Rs. ${itemPrice}`);
        
    }
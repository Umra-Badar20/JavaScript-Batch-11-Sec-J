// var par = document.getElementsByTagName("p");
// var textInMiddleParagraph = par[1].innerHTML;
// par[1].innerHTML = "This SUV is too big.";


// for(var i =0; i<par.length;i++){
//     par[i].style.color ="pink"
// }

// var t = document.getElementById("table");
// var cells = t.getElementsByTagName("td");
// for (var i = 0; i < cells.length; i++) {
//     cells[i].style.backgroundColor = "hsl(0, 20%, 50%)";
// }

// console.log(document.childNodes[1].childNodes[2].childNodes[3])

// console.log(document.childNodes[1].childNodes[1].childNodes[1].parentNode.parentNode.parentNode);

//__________________form_______________________________

document.getElementById("studentForm").addEventListener('submit',function(e){
e.preventDefault()
var name = document.getElementById("name").value
var age = document.getElementById("age").value
var className = document.getElementById("class").value

var table = document.getElementById("studentTable").querySelector("tbody")
var newTr = table.insertRow();

var td1 = newTr.insertCell(0)
var td2 = newTr.insertCell(1)
var td3 = newTr.insertCell(2)
var td4 = newTr.insertCell(3)

td1.innerHTML = name
td2.innerHTML = age
td3.innerHTML = className
td4.innerHTML =`<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>`

document.getElementById("studentForm").reset()
})

function deleteRow(button){
    var tr = button.parentNode.parentNode
    tr.parentNode.removeChild(tr)
}
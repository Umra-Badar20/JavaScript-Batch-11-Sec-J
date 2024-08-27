// var main = document.getElementById("main")
// console.log(main.childNodes[1].nextSibling.nextSibling.nextSibling.nextSibling.nextSibling);
// console.log(document.getElementsByTagName("p").length);
// console.log(main.childNodes[0].nextSibling.childNodes[0].nodeValue);
// console.log(main.attributes[0].nodeName);
// console.log(main.setAttribute("class", "container"));
// console.log(main.getAttribute("class"));
// console.log(main.attributes[0].nodeValue);

// console.log(main);

var div = document.createElement("div")
var h1 = document.createElement("h1")
var p1 = document.createElement("p")
var p2 = document.createElement("p")

div.setAttribute("id", "main")

div.appendChild(h1)
div.appendChild(p1)
div.appendChild(p2)

var h1Txt = document.createTextNode("Hello!");
var p1Txt = document.createTextNode("world!");
var p2Txt = document.createTextNode("SMIT!");

h1.appendChild(h1Txt)
p1.appendChild(p1Txt)
p2.appendChild(p2Txt)

console.log(div);

// var div2 = `<div id="main">
//         <h1>Hello</h1>
//         <p>world</p>
//         <p>SMIT</p>
//     </div>`
//     console.log(div2);
var main2 = document.getElementById("main2")

main2.appendChild(div)


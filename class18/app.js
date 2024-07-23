// function countLetterOccurrence(str, letter){
//     var count = 0;
//     for(var i =0; i< str.length; i++){
//         if(str[i].toLowerCase()===letter.toLowerCase()){ //javascript,   a
//             count++
//         }
//     }
//  return count;
// }
// var string = prompt("Enter a string");
// var ltr= prompt("Enter a letter");
// alert(countLetterOccurrence(string, ltr))
// alert(countLetterOccurrence("jAvascripta", "A"))
// alert(countLetterOccurrence(prompt("Enter a string"), prompt("Enter a letter")))


//_____________________circumfarance & area________
// var r = +prompt("Enter radius Value");
// function circumfarance(radius){
//     var pi = Math.PI
//     var circum = 2*pi*radius
//     return "The circumfarance of circle is " +circum;
// }
// function area(radius){
//     var area = Math.PI*Math.pow(radius,2)
//     return "The area of circle is " + area.toFixed(2);
// }
// console.log(circumfarance(r))
// console.log(area(r));

//_____________Calculate Power______________________
// function power(a,b){
//     if(b===0){
//         return 1
//     }
//     var result = a
//     for(var i =1; i<b; i++){
//         result *=a
//     }
//     return result
// }
// alert(power(2,0))

// var day = prompt("whats day today?")
// switch(day){
//     case "sat": case "sun":
//         alert("Funday")
//      break;
//      case "fri":
//         alert("Party Tonight")  
//         break;
//     default:
//         alert("Can't meet today!")  
// }



// var age = prompt("Enter age b/w 15 to 30");
// switch(true){
//     case(age>=15 && age <=20):
//     alert("you are eligible")
//     break;
//     case(age>=21 && age <=30):
//     alert("You are not eligible")
//     break;

//     default:
//         alert("Enter age b/w 15 to 30")
// }


// function sum(a=2,b=2){
//     return a+b
// }
// alert(sum(5))



// _______________________Palindrome Checker____________________________
//function isPalindrome(str) {
//     var len = str.length;
//     for (var i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - i - 1]){//madam 5-1-1
//             return str+ " is not a palindrome"
//         }else{
//               return str+ " is a palindrome"
//         }
//     }
// }
// // console.log(isPalindrome("madam"))
// // console.log(isPalindrome("majkf"))
// console.log(isPalindrome(prompt("Enter a word:")))


//_________________________Title Case_________________________________
// var sentence = "we are stuDying javascript"
// //step 1
// var words = sentence.split(" ")
// // console.log(words)
// //step 2
// var titleCase = ""
// //step 3
// for(var i =0; i<words.length ; i++){
//     titleCase += words[i].charAt(0).toUpperCase()+ words[i].slice(1).toLowerCase()+ " "
// }
// console.log(titleCase)

//____________________Title Case Function______________________
// function titleCase(str){
//     var str=prompt("enter any sentence:");
//     var words=str.split(" ");
//     var titleCase=" ";
//     for(i=0;i<words.length;i++){
//         titleCase +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+ " ";
//     }
//     return titleCase;
// }
// console.log(titleCase());


function findLongestString(){
    var str = prompt("Enter a string:")
    var words =str.split(" ")
    var longestWord= ""
    var maximumLength = 0;

    for(var i=0 ; i<words.length ; i++){
        if(words[i].length > maximumLength){
            longestWord =words[i] 
            maximumLength= words[i].length
        }
    }
    return longestWord+ " is the longest word"
}
console.log(findLongestString())






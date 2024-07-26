// var i =0;
// while(i<10){
//     console.log(i)
//     i++
// }


// var i =0;
// do{
//     console.log(i)
//     i++
// }while(i<0);

// ______________CUSTOM INDEXOF FUNCTION___________

// function customIndexOf(string, letter) {

//     // for (var i=0; i<string.length; i++){

//     //     if(string[i] === letter){
//     //         return i;
//     //     }
//     // }
//     //______________using while loop
//     var i = 0
//     while (i < string.length) {
//         if (string[i] === letter) {
//             return i
//         }
//         i++
//     }
//     return -1
// }
// var str= prompt("Enter a string: ")
// var ltr= prompt("Enter a letter: ")
// alert(customIndexOf(str, ltr))



// function deleteVowel(str){
// var vowel = "aeiouAEIOU"
// var result = ""

// var i =0;
// while(i<str.length){
// if(vowel.indexOf(str[i])===-1){
//     result += str[i]
// }
//     i++
// }
// return result
// }
// alert(deleteVowel("hello world"))







/*function countVowelPairs(text){
    var count = 0;
    var i = 0;
    while(i<text.length-1){
        var char1 = text[i].toLowerCase()
        var char2 = text[i+1].toLowerCase()
        var vowelPairs = []

        switch(true){
            case (char1==="a" && (char2 ==="a"|| char2==="e"|| char2 ==="i"|| char2 ==="o" || char2=== "u")):
            case (char1==="e" && (char2 ==="a"|| char2==="e"|| char2 ==="i"|| char2 ==="o" || char2=== "u")):
            case (char1==="i" && (char2 ==="a"|| char2==="e"|| char2 ==="i"|| char2 ==="o" || char2=== "u")):  
            case (char1==="o" && (char2 ==="a"|| char2==="e"|| char2 ==="i"|| char2 ==="o" || char2=== "u")):  
            case (char1==="u" && (char2 ==="a"|| char2==="e"|| char2 ==="i"|| char2 ==="o" || char2=== "u")):
                count++
                vowelPairs.push(char1+char2)
                console.log(vowelPairs)
                break
        }
        i++
    }
    return count;
}
alert(countVowelPairs("Please read this application and give me gratuity"))*/
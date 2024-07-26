// function currencyNoteCalculator(amount){//470
// var note100 = Math.floor(amount/100) //4
// var remainingAmount = amount%100 //70

// var note50 = Math.floor(remainingAmount/50) //1
// remainingAmount = remainingAmount %50 //20

// var note10 = Math.floor(remainingAmount/10) //2


// return[note100, note50, note10]
// }
// var am = prompt("Enter your amount:")
// var result = currencyNoteCalculator(am)
// console.log("Note 100: "+ result[0])
// console.log("Note 50: "+ result[1])
// console.log("Note 10: "+ result[2])


//___________________________Events______________________________________

// function clickable(msg){
//     alert(msg)
// }


function zoomIn(e){
    e.style.transform = "scale(2.5)"
    console.log(e)
// e.src= "https://gifdb.com/images/high/dora-498-x-379-gif-ithzlz8esaum9rnv.gif"
}

function zoomOut(e){
    console.log(e)
    e.style.transform = "scale(1)"

    // e.scr ="https://cdn-images-1.medium.com/max/853/1*WRGvP-mtCN9alwmh3WF8dw.jpeg"
}
var today = new Date()
// document.write(today.toString())
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// document.write(today.getTime());
// document.write(dayNames[today.getDay()])

// var birthday = new Date("2004 2 24");
// var age = today.getTime() - birthday.getTime()

// var years = today.getFullYear() - birthday.getFullYear()// 2024 - 2004
// document.write(years)

// document.write(Math.round(age/(1000*60*60*24*30)))






// var newyear=new Date("1 1 2025");
// var remaining= newyear.getTime() - today.getTime();
// document.write(remaining)
// document.write(Math.round(remaining/(1000*60*60*24)),"(days)</br>")
// document.write(Math.round(remaining/(1000*60*60*24*30)),"(months)</br>")
// document.write(Math.round(remaining/(1000*60*60*24*7)),"(weeks)")


// document.write(moment().format("D-MMMM-YYYY  ddd"))
// document.write(moment().format("h:mm A [<br>] M/D/YYYY"))
// console.log(moment());

var a = moment(new Date("1 january 2025"));
var b = moment(new Date);
document.write(a.diff(b, 'hours'))

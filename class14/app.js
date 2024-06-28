// var now = new Date();
// // console.log(now.setFullYear(2023))
// now.setFullYear(2023);
// now.setMonth(4)

// console.log(now);




// var myBirthday=new Date("10 4 2003");
// document.write(now +"</br>");
// if(myBirthday.getDay()===0 ||myBirthday.getDay()===6){
//     document.write("today is fun day");
// }
// else{
//     document.write("Today is a working day");
// }

// for(var i=0 ; i<=5 ; i++){
//    console.log("Hello")
// }



// function abc(a,b){
//   console.log("Hello "+ a+ " your age is "+ b)
// }

// abc("Umra")
// console.log("SMIT")
// abc("Rabiya",10)
// abc(_,13)

// function abc(a){
//     console.log("I study in "+a)
// }
// var institute= [ "smit","aptech"]
// abc(institute[0])


// function sum(x,y){
//     console.log(x+y)
// }
// sum(2,3)
// sum(5,3)
// sum(2,3)
// sum(5,3)



// function average(x,y){
//     console.log(Math.round((x+y)/2))
// }

// average(2,6)
// average(13,4)


// Swal.fire({
//     title: "Do you want to save the changes?",
//     showDenyButton: true,
//     showCancelButton: true,
//     confirmButtonText: "Save",
//     denyButtonText: `Don't save`
//   }).then((result) => {
//     /* Read more about isConfirmed, isDenied below */
//     if (result.isConfirmed) {
//       Swal.fire("Saved!", "", "success");
//     } else if (result.isDenied) {
//       Swal.fire("Changes are not saved", "", "info");
//     }
//   });

// const swalWithBootstrapButtons = Swal.mixin({
//     customClass: {
//       confirmButton: "btn btn-success",
//       cancelButton: "btn btn-danger"
//     },
//     buttonsStyling: false
//   });
//   swalWithBootstrapButtons.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonText: "Yes, delete it!",
//     cancelButtonText: "No, cancel!",
//     reverseButtons: true
//   }).then((result) => {
//     if (result.isConfirmed) {
//       swalWithBootstrapButtons.fire({
//         title: "Deleted!",
//         text: "Your file has been deleted.",
//         icon: "success"
//       });
//     } else if (
//       /* Read more about handling dismissals below */
//       result.dismiss === Swal.DismissReason.cancel
//     ) {
//       swalWithBootstrapButtons.fire({
//         title: "Cancelled",
//         text: "Your imaginary file is safe :)",
//         icon: "error"
//       });
//     }
//   });






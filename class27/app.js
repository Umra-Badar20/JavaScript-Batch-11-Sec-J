// console.log(document.childNodes[1].childNodes[2].childNodes[4])
// var fname = "Umra"
// var lname = "Badar"
// console.log("my name is"+" "+fname+" "+ lname)
// //Templete String
// console.log(`my name is ${fname} ${lname}`)
var backgroundImg;
function post(){
    var title = document.getElementById("title")
    var description  = document.getElementById("description")
    
if(title.value.trim() && description.value.trim()){
    var post = document.getElementById("post")
    post.innerHTML+=`
     <div class="card p-2 mb-2">
                    <div class="card-header">
                      <em>@post</em>
                    </div>
                    <div style="background-image: url(${backgroundImg})" class="card-body">
                      <blockquote class="blockquote mb-0">
                        <p>${title.value}</p>
                        <footer class="blockquote-footer">${description.value}</footer>
                      </blockquote>
                    </div>
                  </div>
    `
    title.value =""
    description.value = ""
  }else{
    Swal.fire({
      title: "Empty Post",
      text: "Can't publish post without Title or Description",
      icon: "question"
    });  }
}
function selectImg(src){
  backgroundImg =src
  var bgImg = document.getElementsByClassName('bg-img')
  // for(var i=0; i<bgImg.length; i++){
  //   bgImg[i].classList.remove('selectedImg')
  // } 
  for(var i=0; i<bgImg.length; i++){
    bgImg[i].className ="bg-img"
  } 
  event.target.className +=" selectedImg"
}
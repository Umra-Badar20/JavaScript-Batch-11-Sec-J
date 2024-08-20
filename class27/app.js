// console.log(document.childNodes[1].childNodes[2].childNodes[4])
// var fname = "Umra"
// var lname = "Badar"
// console.log("my name is"+" "+fname+" "+ lname)
// //Templete String
// console.log(`my name is ${fname} ${lname}`)



function post(){
    var title = document.getElementById("title")
    var description  = document.getElementById("description")

    var post = document.getElementById("post")
    post.innerHTML+=`
     <div class="card p-2">
                    <div class="card-header">
                      <em>@post</em>
                    </div>
                    <div class="card-body">
                      <blockquote class="blockquote mb-0">
                        <p>${title.value}</p>
                        <footer class="blockquote-footer">${description.value}</footer>
                      </blockquote>
                    </div>
                  </div>
    `
    title.value =""
    description.value = ""
}
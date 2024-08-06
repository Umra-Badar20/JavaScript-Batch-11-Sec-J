var character = document.getElementById("character")
var right = 0;
function animation(){
    console.log(event.keyCode)

    if(event.keyCode===39 && right <1400){
        character.src= "images/ai-forward.gif"
        right = right +10
        character.style.left = right +"px"
        setTimeout(function(){
            character.src = "images/ai-d.gif"
        },1000)
      
    }
    if(event.keyCode===37 && right >10){
        character.src = "images/ai-runaway.gif"
        right = right-10
        character.style.left = right +"px"
        setTimeout(function(){
            character.src = "images/ai-d.gif"
        },1000)
        
    }
    if(event.keyCode===32){
        character.src= "images/ai-airp.gif"
        character.style.height = "300px"
        character.style.width = "200px"
        setTimeout(function(){
            character.src = "images/ai-d.gif"
            character.style.height = "200px"
        character.style.width = "150px"
        },1000)

    }
}
window.onkeydown = animation
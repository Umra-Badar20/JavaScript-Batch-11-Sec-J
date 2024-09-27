var buttons = document.querySelectorAll(".btn")

buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener("click",function(){
        var command = button.dataset["element"]
        console.log(command);
        if(command == "insertImage" || command == "createLink"){
            var url = prompt("Enter link here:", "https://")
            document.execCommand(command,true,url)
        }else{

            document.execCommand(command,false,null)
        }
        
    })
    

}

)
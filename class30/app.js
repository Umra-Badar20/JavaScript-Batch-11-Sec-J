var questions = [
    {
        question :"What is the correct syntax to declare a variable in JavaScript?",
        opt1: "var variableName;",
        opt2: "let variableName;",
        opt3: "const variableName;",
        opt4: "All of the above",
        ans :  "All of the above"
    },
    {
        question :"Which of the following is used to create an object in JavaScript?",
        opt1: "{}",
        opt2: "[]",
        opt3: "()",
        opt4: "< >",
        ans : "{}"
    },
    {
        question :" Which method is used to parse a string to an integer in JavaScript?",
        opt1: "parseInt()",
        opt2: "parseInteger()",
        opt3: "parseNumber()",
        opt4: "parseFloat()",
        ans : "parseInt()"
    }
]
var index = 0;
var result = 0
function renderQues(){
    var container = document.getElementById("container");
    var option = document.getElementsByName("option");

    for(var i =0; i<option.length; i++){
        if(option[i].checked){
            if(questions[index-1].ans===option[i].value){
                result++
            }
            console.log(option[i].value,  questions[index-1].ans);    
        }
    }
    if(!questions[index]){
        console.log("Result: "+ result);
        return;
    }

    container.innerHTML = `
     <p class="question">${index+1})
     ${questions[index].question}</p><hr/>
        <div> <label for="opt1"><input type="radio" name="option" id="opt1" value="${questions[index].opt1}"> 
        ${questions[index].opt1}</label></div>
        <div> <label for="opt2"><input type="radio" name="option" id="opt2" value="${questions[index].opt2}">
        ${questions[index].opt2}</label></div>
        <div> <label for="opt3"><input type="radio" name="option" id="opt3" value="${questions[index].opt3}">
        ${questions[index].opt3}</label></div>
        <div> <label for="opt4"><input type="radio" name="option" id="opt4" value="${questions[index].opt4}">
        ${questions[index].opt4}</label></div>
                <button class="mt-2 btn btn-success" onclick="renderQues()">Next</button>

    `
    index++
}
renderQues()
function registration(){
    event.preventDefault()
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var phoneNumber = document.getElementById("phoneNumber")
    var password = document.getElementById("password")
    var cpassword = document.getElementById("cpassword")

    // console.log(name.value, email.value, phoneNumber.value, password.value, cpassword.value);
    var userData = {
        name : name.value,
        email: email.value,
        phoneNumber : phoneNumber.value,
        password : password.value,
        cpassword : cpassword.value
    }
    // console.log(userData);
    localStorage.setItem("userData", JSON.stringify(userData))
    var getData = localStorage.getItem("userData")
    var parseData = JSON.parse(getData)
    // console.log(parseData) 
}

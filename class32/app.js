function registration() {
    event.preventDefault()
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var phoneNumber = document.getElementById("phoneNumber")
    var password = document.getElementById("password")
    var cpassword = document.getElementById("cpassword")

    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    if (password.value !== cpassword.value) {
        alert("Passwords should be same!")
    } else if (!regex.test(password.value)) {
        alert(`At least one lowercase alphabet i.e. [a-z]
            At least one uppercase alphabet i.e. [A-Z]
            At least one Numeric digit i.e. [0-9]
            At least one special character i.e. [‘@’, ‘$’, ‘.’, ‘#’, ‘!’, ‘%’, ‘*’, ‘?’, ‘&’, ‘^’]
            Also, the total length must be in the range [8-15]`)
    }
    // console.log(name.value, email.value, phoneNumber.value, password.value, cpassword.value);
    var userData = {
        name: name.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        password: password.value,
        cpassword: cpassword.value
    }
    // console.log(userData);
    localStorage.setItem("userData", JSON.stringify(userData))
    // var getData = localStorage.getItem("userData")
    // var parseData = JSON.parse(getData)
    // console.log(parseData) 
    setTimeout(() => {
        window.location.href = "./dashboard.html"
    }, 2000);
}

function getLocalData() {
    var getData = localStorage.getItem("userData")
    var parseData = JSON.parse(getData)
    console.log(parseData)
    var getLocalDataDiv = document.getElementById("getLocalDataDiv")
    getLocalDataDiv.innerHTML = `
     <ul>
        <li>Name: ${parseData.name}</li>
        <li>Email: ${parseData.email}</li>
        <li>Phone Number: ${parseData.phoneNumber}</li>
     </ul>
    `
}
getLocalData()

function redirect() {
    window.location.href = "./index.html"
}
function login() {
    event.preventDefault()
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    var getData = localStorage.getItem("userData")
    var parseData = JSON.parse(getData)
    if (parseData.email !== email.value) {
        alert("Invalid Email")
    } else if (parseData.password !== password.value) {
        alert("Incorrect Password")
    } else {
        alert("Login Succussfully")
        window.location.href = "./dashboard.html"
    }

}
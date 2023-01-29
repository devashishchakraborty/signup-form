const password = document.querySelector("input#password")
const confirmPassword = document.querySelector("input#confirm-password")

let passwordValue = "";
let confirmPasswordValue = "";

password.addEventListener("focus", function(){
    password.addEventListener("keyup", function(){
        passwordValue = password.value;
        console.log(passwordValue === confirmPasswordValue);
    })
});

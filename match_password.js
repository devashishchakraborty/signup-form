const password = document.querySelector("input#password")
const confirmPassword = document.querySelector("input#confirm-password")

let passwordValue = "";
let confirmPasswordValue = "";

password.addEventListener("focus", function () {
    password.addEventListener("keyup", function () {
        passwordValue = password.value;
        if (passwordValue.length === 0 && confirmPasswordValue.length === 0) {
            password.setAttribute("matched", "");
            confirmPassword.setAttribute("matched", "");
        }
    })
});

confirmPassword.addEventListener("focus", function () {
    confirmPassword.addEventListener("keyup", function () {
        confirmPasswordValue = confirmPassword.value;
        if (passwordValue.length === 0 && confirmPasswordValue.length === 0) {
            password.setAttribute("matched", "");
            confirmPassword.setAttribute("matched", "");
        } else if (passwordValue === confirmPasswordValue) {
            password.setAttribute("matched", "true");
            confirmPassword.setAttribute("matched", "true");
        } else {
            password.setAttribute("matched", "false");
            confirmPassword.setAttribute("matched", "false");
        }
    })
});
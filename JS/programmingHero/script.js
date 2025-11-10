const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("passwordTwo");

function showError(input, message){
    const formBlock = input.parentElement;
    formBlock.className = "form-field-container error";
    formBlock.querySelector("small").innerText = message;
}
function showSuccess(input){
    input.parentElement.className = "form-field-container success";
}

function checkIfFieldIsEmpty(input, errorMessage){
    if(input.value === ""){
        showError(input, errorMessage);
    } else{
        showSuccess(input);
    }
}

function checkPasswordsMatch(message){
    if(password.value !== password2.value){
        showError(password2, message)
    }
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    checkIfFieldIsEmpty(username, "Username is required");
    checkIfFieldIsEmpty(password, "Password is required");
    checkIfFieldIsEmpty(password2, "Please confirm password");
    checkPasswordsMatch("Passwors do not match");
});

let emailForm = document.getElementById("email-form");
let emailButton = document.getElementById("email-button");
let labelForm = document.getElementsByClassName("label-required")[0];

emailButton.onclick = function()  {
    if (emailForm.value.length > 0) {
        validateEmail(emailForm.value);
    } else {
        labelForm.style.display = "block";
    }
}

function validateEmail(email) {
    const regex = /@.+\.com$/;

    if (regex.test(email)) {
        console.log("Correo válido");
        labelForm.style.display = "none";
        return true;

    } else {
        console.log("Correo inválido");
        labelForm.style.display = "block";
        emailForm.style.color = "#ff6257";
        emailForm.style.background = "#ffe7e5";
        emailForm.style.border = "#ff6257 1px solid"
        return false;
    }
    
}





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
        emailForm.classList.remove("invalid-email");
        localStorage.setItem('email', email);
        window.location.href = "form-success.html";
    } else {
        console.log("Correo inválido");
        labelForm.style.display = "block";
        emailForm.classList.add("invalid-email");
        return false;
    }
}


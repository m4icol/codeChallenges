
let idAdvice = document.getElementById("idAdvice");
let textAdvice = document.getElementById("textAdvice");

function fetchAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        idAdvice.innerHTML = "ADVICE #" + data.slip.id;
        textAdvice.innerHTML = data.slip.advice;
    });
}

let buttonAdvice = document.getElementById("buttonAdvice");
buttonAdvice.onclick = fetchAdvice;

let message = document.getElementById("formText");

document.getElementById("formSubmit").addEventListener("click", function () {
  let formEmail = document.getElementById("formEmail").value;
  const regex = /@.+\.com$/;

  if (regex.test(formEmail)) {
    message.classList.add("hidden");
    window.location.reload();
  } else {
    message.classList.remove("hidden");
  }
});

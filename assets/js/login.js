var message1ValidMatch = document.getElementById("message-validator1-match");

function togglePasswordVisibility(inputId) {
  var passwordInput = document.getElementById(inputId);
  var icon = passwordInput.nextElementSibling.firstElementChild;

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}
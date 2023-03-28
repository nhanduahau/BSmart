var message1ValidMatch = document.getElementById("message-validator1-match");

function togglePasswordVisibility(id) {
  var input = document.getElementById(id);
  var icon = input.nextElementSibling.querySelector("span");
  if (input.type === "password") {
    input.type = "text";
    // icon.textContent = "visibility_off";
  } else {
    input.type = "password";
    // icon.textContent = "visibility";
  }
}
// Validator password for mentor
var inputPasswordMentor = document.getElementById("password-mentor");
var confirmPasswordMentor = document.getElementById("confirm-password-mentor");
var messageValid = document.getElementById("message-validator");
var message1Valid = document.getElementById("message-validator1");
var message1ValidMatch = document.getElementById("message-validator1-match");
// When user types in password field
var patternPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

inputPasswordMentor.addEventListener("keyup", function () {
  if (patternPassword.test(inputPasswordMentor.value)) {
    messageValid.classList.remove("message-un-valid");
    messageValid.style.display = "none";
    return true;
  } else {
    messageValid.classList.add("message-un-valid");
    messageValid.style.display = "block";
    return false;
  }
});

// When user types in confirm password field
confirmPasswordMentor.addEventListener("keyup", function () {
  if (confirmPasswordMentor.value === inputPasswordMentor.value) {
    message1Valid.classList.remove("message-un-valid");
    message1Valid.style.display = "none";
    message1ValidMatch.style.display = "none";
    return true;
  } else {
    message1ValidMatch.classList.add("message-match");
    message1ValidMatch.style.display = "block";
    return false;
  }
});

//Học Viên
// điều kiện và ràng buộc khi nhập mật khẩu mới
function checkPasswordMatch() {
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("confirm-password");
  // var passwordMatch = document.getElementById("password-match");
  // var passwordNotMatch = document.getElementById("password-not-match");
  var passwordNotMatchFeedback = document.getElementById("password-error");

  if (password.value == "" || confirmPassword.value == "") {
    // passwordMatch.style.display = "none";
    // passwordNotMatch.style.display = "none";
    passwordNotMatchFeedback.style.display = "none";
    return;
  }

  if (password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Mật khẩu không khớp");
    // passwordMatch.style.display = "inline";
    // passwordNotMatch.style.display = "none";
    passwordNotMatchFeedback.style.display = "block";
  } else {
    confirmPassword.setCustomValidity("");
    // passwordMatch.style.display = "none";
    // passwordNotMatch.style.display = "inline";
    passwordNotMatchFeedback.style.display = "none";
  }
  if (password.value == "" || confirmPassword.value == "") {
    passwordMatch.style.display = "none";
    // passwordNotMatch.style.display = "none";
    // passwordNotMatchFeedback.style.display = "none";
    passwordError.className = "invalid-feedback";
    return;
  }
}
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
//thông báo ràng buộc mật khẩu
function validatePassword() {
  var password = document.getElementById("password");
  // var password1 = document.getElementById("password1");

  var passwordError = document.getElementById("password-error");

  // var password1Error = document.getElementById("password1-error"); // invalid-feedback1

  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "invalid-feedback";

    // password1Error.className = "invalid-feedback1";
  } else {
    passwordError.textContent =
      "Mật khẩu mới phải có ít nhất 6 ký tự, bao gồm ít nhất 1 số, 1 chữ hoa, 1 ký tự đặc biệt";
    passwordError.className = "invalid-feedback d-block";

    // password1Error.textContent =
    //   "Mật khẩu mới phải có ít nhất 6 ký tự, bao gồm ít nhất 1 số, 1 chữ hoa, 1 ký tự đặc biệt";
    // password1Error.className = "invalid-feedback1 d-block";
  }
}

// Validate phone number
var inpPhoneNumber = document.getElementById("phone-number-member");
var inpPhoneNumberMentor = document.getElementById("phone-number-mentor");
var patternPhoneNumber = /^(84|0[3|5|7|8|9])+([0-9]{8})\b$/;
// /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var messageError = document.getElementById("phone-number-error");
var messageMentorError = document.getElementById("phone-number-mentor-error");

messageError.style.display = "none";
messageMentorError.style.display = "none";

// Member
inpPhoneNumber.addEventListener("keyup", function () {
  if (inpPhoneNumber.value.match(patternPhoneNumber)) {
    messageError.style.display = "none";
    return true;
  } else {
    messageError.style.display = "block";
    messageError.style.color = "red";
    return false;
  }
});

// Mentor
inpPhoneNumberMentor.addEventListener("keyup", function () {
  if (inpPhoneNumberMentor.value.match(patternPhoneNumber)) {
    messageMentorError.style.display = "none";
    return true;
  } else {
    messageMentorError.style.display = "block";
    messageMentorError.style.color = "red";
    return false;
  }
});

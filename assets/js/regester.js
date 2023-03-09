// điều kiện và ràng buộc khi nhập mật khẩu mới
function checkPasswordMatch() {
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirm-password");
    var passwordMatch = document.getElementById("password-match");
    var passwordNotMatch = document.getElementById("password-not-match");
    var passwordNotMatchFeedback = document.getElementById("password-error");
  
    if (password.value == "" || confirmPassword.value == "") {
      passwordMatch.style.display = "none";
      passwordNotMatch.style.display = "none";
      passwordNotMatchFeedback.style.display = "none";
      return;
    }
  
    if (password.value != confirmPassword.value) {
      confirmPassword.setCustomValidity("Mật khẩu không khớp");
      passwordMatch.style.display = "inline";
      passwordNotMatch.style.display = "none";
      passwordNotMatchFeedback.style.display = "block";
    } else {
      confirmPassword.setCustomValidity("");
      passwordMatch.style.display = "none";
      passwordNotMatch.style.display = "inline";
      passwordNotMatchFeedback.style.display = "none";
    }
    if (password.value == "" || confirmPassword.value == "") {
      passwordMatch.style.display = "none";
      passwordNotMatch.style.display = "none";
      passwordNotMatchFeedback.style.display = "none";
      passwordError.className = "invalid-feedback";
      return;
    }
  }
  function togglePasswordVisibility(id) {
    var input = document.getElementById(id);
    var icon = input.nextElementSibling.querySelector("span");
    if (input.type === "password") {
      input.type = "text";
      icon.textContent = "visibility_off";
    } else {
      input.type = "password";
      icon.textContent = "visibility";
    }
  }
  //thông báo ràng buộc mật khẩu
  function validatePassword() {
    var password = document.getElementById("password");
    var passwordError = document.getElementById("password-error");
  
    if (password.validity.valid) {
      passwordError.textContent = "";
      passwordError.className = "invalid-feedback";
    } else {
      passwordError.textContent =
        "Mật khẩu mới phải có ít nhất 6 ký tự, bao gồm ít nhất 1 số, 1 chữ hoa, 1 ký tự đặc biệt";
      passwordError.className = "invalid-feedback d-block";
    }
  }
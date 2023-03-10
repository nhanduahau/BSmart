// điều kiện và ràng buộc khi nhập mật khẩu mới
function checkPasswordMatch() {
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirm-password");

    // var password1 = document.getElementById("password1");
    // var confirm1Password = document.getElementById("confirm-password1");

    // var passwordMatch = document.getElementById("password-match");
    // var passwordNotMatch = document.getElementById("password-not-match");
    var passwordNotMatchFeedback = document.getElementById("password-error");

    // var password1NotMatchFeedback = document.getElementById("password1-error");
  
    if (password.value == "" || confirmPassword.value == "") {
      // passwordMatch.style.display = "none";
      // passwordNotMatch.style.display = "none";
      passwordNotMatchFeedback.style.display = "none";
      // password1NotMatchFeedback.style.display = "none";
      return;
    }
  
    if (password.value != confirmPassword.value) {
      confirmPassword.setCustomValidity("Mật khẩu không khớp");
      // passwordMatch.style.display = "inline";
      // passwordNotMatch.style.display = "none";
      passwordNotMatchFeedback.style.display = "block";

      // confirm1Password.setCustomValidity("Mật khẩu không khớp")
      // password1NotMatchFeedback.style.display = "block";
    } else {
      confirmPassword.setCustomValidity("");
      // passwordMatch.style.display = "none";
      // passwordNotMatch.style.display = "inline";
      passwordNotMatchFeedback.style.display = "none";

      // confirm1Password.setCustomValidity("")
      // password1NotMatchFeedback.style.display = "none";
    }
    if (password.value == "" || confirmPassword.value == "") {
      passwordMatch.style.display = "none";
      // passwordNotMatch.style.display = "none";
      // passwordNotMatchFeedback.style.display = "none";
      passwordError.className = "invalid-feedback";
      // password1Error.className = "invalid-feedback1";
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
  
    if (password.validity.valid || password1.validity.valid) {
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
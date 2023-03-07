// điều kiện và ràng buộc khi nhập mật khẩu mới
function checkPasswordMatch() {
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirm-password");
    var passwordMatch = document.getElementById("password-match");
    var passwordNotMatch = document.getElementById("password-not-match");
    var passwordNotMatchFeedback = document.getElementById("password-not-match-feedback");
  
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

// Nút cập nhật phần mật khẩu
function updateData(event) {
    event.preventDefault(); // ngăn chặn chuyển trang mặc định của nút submit
    // gửi yêu cầu cập nhật dữ liệu bằng AJAX
    // ...
  }
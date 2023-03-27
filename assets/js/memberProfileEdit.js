// validator images
function previewAvatar() {
  var optFile = document.getElementById("formFileAvatar");
  var pathFile = optFile.value;
  var allowedExtensions = /(.jpg|.jpeg|.png)$/i;

  if (!allowedExtensions.exec(pathFile)) {
    alert("Vui lòng chọn file ảnh có đuôi là: .jpeg/.jpg/.png");
    optFile.value = "";
    return false;
  } else {
    var fileSize = optFile.files[0].size; // lấy kích thước tệp đầu vào
    if (fileSize > 2000000) {
      // giới hạn kích thước tệp là 2MB
      alert(
        "Kích thước tệp ảnh tải lên quá lớn. Vui lòng chọn tệp ảnh có dung lượng tối đa là 2MB."
      );
      optFile.value = "";
      return false;
    } else {
      avatarImage.src = "";
      avatarImage.src = URL.createObjectURL(event.target.files[0]);
    }
  }
}

function clearAvatar() {
  document.getElementById("formFileAvatar").value = null;
  avatarImage.src = "./assets/images/avatar-mentor-1.jpg";
}

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

// Validator DOB
var inputDate = document.getElementById("dob-member-profile-edit");
var patternDOB = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
var messageErrorDOB = document.getElementById("message-error-dob");

messageErrorDOB.style.display = "none";

inputDate.addEventListener("keyup", function () {
  console.log("inputDate.value", inputDate.value);
  if (inputDate.value.match(patternDOB)) {
    messageErrorDOB.style.display = "none";
    console.log("ok");
    return true;
  } else {
    console.log("no!");
    messageErrorDOB.style.display = "block";
    return false;
  }

  // const dateString = this.value;
  // console.log("dateString", dateString);
  // if (Date.parse(dateString)) {
  //   console.log("Đây là kiểu ngày tháng năm hợp lệ!");
  // } else {
  //   console.log("Đây không phải là kiểu ngày tháng năm hợp lệ!");
  //   // Hiển thị thông báo lỗi cho người dùng tại đây
  // }
});

// Validate phone number
var inpPhoneNumber = document.getElementById("phone-number-member");
var patternPhoneNumber = /^(84|0[3|5|7|8|9])+([0-9]{8})\b$/;
// /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var messageError = document.getElementById("phone-number-error");

messageError.style.display = "none";

function checkPhoneNumber() {
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
}
checkPhoneNumber();

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

// Nút cập nhật phần mật khẩu
function updateData(event) {
  event.preventDefault();

  // check inputs
  if (
    !inpPhoneNumber.value.match(patternPhoneNumber) ||
    !inputDate.value.match(patternDOB)
  ) {
    alert("Bạn cần phải nhập đầy đủ thông tin!");
    return;
  } else {
    // Lưu thông tin vào localStorage
    localStorage.setItem(
      "avatarImage",
      document.getElementById("avatarImage").src
    );
    localStorage.setItem(
      "hoTen",
      document.querySelector('input[type="text"]').value
    );
    localStorage.setItem(
      "ngaySinh",
      document.querySelector('input[type="date"]').value
    );
    localStorage.setItem(
      "diaChi",
      document.querySelectorAll('input[type="text"]')[1].value
    );
    localStorage.setItem(
      "soDienThoai",
      document.querySelectorAll('input[type="text"]')[2].value
    );
    localStorage.setItem(
      "matKhauMoi",
      document.getElementById("password").value
    );

    // Chuyển qua trang HTML khác
    window.location.href = "member-profile.html";
  }
}

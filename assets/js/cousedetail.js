// Lấy thông tin đăng nhập của người dùng
const isLoggedIn = true; // Thay bằng true hoặc false tùy thuộc vào cách xác thực đăng nhập của bạn

// Lắng nghe sự kiện click vào nút "Đăng ký khóa học"
document
  .getElementById("enroll-btn")
  .addEventListener("click", function (event) {
    // Nếu người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập
    if (!isLoggedIn) {
      window.location.href = "login-mobile.html";
    }
    // Nếu người dùng đã đăng nhập, chuyển hướng đến trang thanh toán
    else {
      window.location.href = "payment.html";
    }

    // Ngăn chặn hành động mặc định của thẻ a (chuyển hướng đến đường dẫn trong href)
    event.preventDefault();
  });

// opt class
let otpClass = document.querySelectorAll(".item-info-class");
let btnOtpClass = document.querySelectorAll(".option-info-class-btn");
let btnDelOtpClass = document.querySelectorAll(".option-info-class-btn-del");

btnOtpClass.forEach((_btnCreate, _btnCreateIndex) => {
  // event clicked button Otp class
  _btnCreate.addEventListener("click", function () {
    // console.log("_btnCreateIndex", _btnCreateIndex);

    otpClass.forEach((_otpClass, _indexOtpClass) => {
      // check -> show optioned class
      if (_btnCreateIndex == _indexOtpClass) {
        if (confirm("Bạn có muốn chọn lớp này hay không?") == true) {
          _otpClass.classList = "otp-class-active";
          _btnCreate.style.display = "none";

          // Check -> show button delete
          btnDelOtpClass.forEach((_delOptClass, _indexDelOtpClass) => {
            if (_indexDelOtpClass == _indexOtpClass) {
              _delOptClass.style.display = "block";

              // event clicked button Delete opt class
              _delOptClass.addEventListener("click", function () {
                if (confirm("Bạn có muốn hủy chọn lớp này không?") == true) {
                  _delOptClass.style.display = "none";
                  _otpClass.classList = "otp-class-active-none";
                  _btnCreate.style.display = "block";
                }
              });
            }
          });
        } else {
          return;
        }
      }
    });
  });
});

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
let inputIdClass = document.querySelectorAll("#input-id-class");
let btnDelOtpClass = document.querySelectorAll(".option-info-class-btn-del");
let idOptionClassed = document.getElementById("id-class-optioned");

// save option classed
let saveOptionClass = [];
let indexOptionClass = [];
let saveClassed = [];
let optionClassed = [];

btnOtpClass.forEach((_btnCreate, _btnCreateIndex) => {
  // event clicked button Otp class
  _btnCreate.addEventListener("click", function () {
    saveClassed.push(_btnCreate);
    saveOptionClass.push(_btnCreateIndex);

    // handle input
    inputIdClass.forEach((_inpIdClass, _indexInpIdClass) => {
      if (_indexInpIdClass == _btnCreateIndex) {
        idOptionClassed.value = _inpIdClass.value;
      }
    });

    otpClass.forEach((_otpClass, _indexOtpClass) => {
      // check -> show optioned class
      if (_btnCreateIndex == _indexOtpClass) {
        indexOptionClass.push(_indexOtpClass);
        optionClassed.push(_otpClass);

        // if (confirm("Bạn có muốn chọn lớp này hay không?") == true) {
        if (saveOptionClass.length > 1) {
          if (saveOptionClass[0] == indexOptionClass[0]) {
            // clear bg classed
            optionClassed.forEach((_optClassed) => {
              _optClassed.classList.remove("otp-class-active");
            });

            // clear button del class + show button create class
            btnDelOtpClass.forEach((_delOptClass, _indexDelOtpClass) => {
              saveClassed.forEach((_classed) => {
                _delOptClass.style.display = "none";
                _classed.style.display = "block";
              });
            });
          }
        }

        _otpClass.classList = "otp-class-active";
        _btnCreate.style.display = "none";

        btnDelOtpClass.forEach((_delOptClass, _indexDelOtpClass) => {
          // Check -> show button delete
          if (_indexDelOtpClass == _indexOtpClass) {
            _delOptClass.style.display = "block";

            // event clicked button Delete opt class
            _delOptClass.addEventListener(
              "click",
              function () {
                // if (confirm("Bạn có muốn hủy chọn lớp này không?") == true) {
                _delOptClass.style.display = "none";
                _otpClass.classList = "otp-class-active-none";
                _btnCreate.style.display = "block";
              }
              // }
            );
          }
        });
        // } else {
        //   return;
        // }
      }
    });
  });
});

// Button load more
var btnShowMore = document.getElementById("btn-show-more");
$(".feedback-item").slice(0, 5).show();

console.log("items ->", $(".feedback-item"));

if ($(".feedback-item").length >= 5) {
  btnShowMore.style.display = "block";
}

// handle clicked load more
btnShowMore.addEventListener("click", function () {
  $(".feedback-item:hidden").slice(0, 5).slideDown();
});

// Link giới thiệu
document.querySelectorAll(".copy-link").forEach((copyLinkParent) => {
  const inputField = copyLinkParent.querySelector(".copy-link-input");
  const copyButton = copyLinkParent.querySelector(".copy-link-button");
  const text = inputField.value;

  inputField.addEventListener("focus", () => inputField.select());

  copyButton.addEventListener("click", () => {
    inputField.select();
    navigator.clipboard.writeText(text);

    inputField.value = "Copied!";
    setTimeout(() => (inputField.value = text), 2000);
  });
});

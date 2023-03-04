// Lấy thông tin đăng nhập của người dùng
const isLoggedIn = false; // Thay bằng true hoặc false tùy thuộc vào cách xác thực đăng nhập của bạn

// Lắng nghe sự kiện click vào nút "Đăng ký khóa học"
document.getElementById("enroll-btn").addEventListener("click", function(event) {
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
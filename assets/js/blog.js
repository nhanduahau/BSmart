// Lấy nút "lên đầu trang"
var btnScrollToTop = document.querySelector("#btnScrollToTop");

// Thêm sự kiện "scroll" vào trang web
window.addEventListener("scroll", function() {
  // Kiểm tra khi nào người dùng scroll xuống đủ để hiển thị nút "lên đầu trang"
  if (window.pageYOffset > 100) {
    btnScrollToTop.style.display = "block";
  } else {
    btnScrollToTop.style.display = "none";
  }
});

// Thêm sự kiện "click" vào nút "lên đầu trang"
btnScrollToTop.addEventListener("click", function() {
  // Cuộn trang lên đầu
  window.scrollTo({ top: 0, behavior: "smooth" });
});
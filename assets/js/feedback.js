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



var btnFeedback = document.querySelectorAll(".btn-star-feedback");
var activeIcon1 = document.getElementById("star-active-1");
var activeIcon2 = document.getElementById("star-active-2");
var activeIcon3 = document.getElementById("star-active-3");
var activeIcon4 = document.getElementById("star-active-4");
var activeIcon5 = document.getElementById("star-active-5");
var getNumberStar = document.getElementById("value-star");

btnFeedback.forEach((_btnFeedback, index) => {
  // clicked icon star
  _btnFeedback.addEventListener("click", function () {
    if (index == 4) {
      activeIcon1.classList.add("active-icon-star");
      activeIcon2.classList.add("active-icon-star");
      activeIcon3.classList.add("active-icon-star");
      activeIcon4.classList.add("active-icon-star");
      activeIcon5.classList.add("active-icon-star");
      getNumberStar.value = index + 1;
    } else if (index == 3) {
      activeIcon1.classList.add("active-icon-star");
      activeIcon2.classList.add("active-icon-star");
      activeIcon3.classList.add("active-icon-star");
      activeIcon4.classList.add("active-icon-star");
      activeIcon5.classList.remove("active-icon-star");
      getNumberStar.value = index + 1;
    } else if (index == 2) {
      activeIcon1.classList.add("active-icon-star");
      activeIcon2.classList.add("active-icon-star");
      activeIcon3.classList.add("active-icon-star");
      activeIcon4.classList.remove("active-icon-star");

      activeIcon5.classList.remove("active-icon-star");
      getNumberStar.value = index + 1;
    } else if (index == 1) {
      activeIcon1.classList.add("active-icon-star");
      activeIcon2.classList.add("active-icon-star");
      activeIcon3.classList.remove("active-icon-star");

      activeIcon4.classList.remove("active-icon-star");
      activeIcon5.classList.remove("active-icon-star");
      getNumberStar.value = index + 1;
    } else {
      activeIcon1.classList.add("active-icon-star");
      activeIcon2.classList.remove("active-icon-star");

      activeIcon3.classList.remove("active-icon-star");
      activeIcon4.classList.remove("active-icon-star");
      activeIcon5.classList.remove("active-icon-star");
      getNumberStar.value = index + 1;
    }
  });
});

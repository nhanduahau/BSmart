const logos = document.querySelectorAll(".logo-grid img");
let currentLogoIndex = 0;
let numLogosToShow = 4;

function showNextLogos() {
  // Ẩn số lượng logo hiện tại
  for (let i = currentLogoIndex; i < currentLogoIndex + numLogosToShow; i++) {
    logos[i].style.display = "none";
  }

  // Tính toán chỉ số của số lượng logo tiếp theo
  currentLogoIndex += numLogosToShow;
  if (currentLogoIndex >= logos.length) {
    currentLogoIndex = 0;
  }

  // Hiển thị số lượng logo mới
  for (let i = currentLogoIndex; i < currentLogoIndex + numLogosToShow; i++) {
    if (window.innerWidth >= 767) {
      logos[i].style.display = "block";
    } else {
      logos[i].style.display = i === currentLogoIndex ? "block" : "none";
    }
  }
}

// Hiển thị số lượng logo đầu tiên tùy thuộc vào màn hình
if (window.innerWidth >= 767) {
  numLogosToShow = 4;
  showNextLogos();
} else {
  numLogosToShow = 1;
  setTimeout(showNextLogos, 3000);
}
// Thực hiện hành động chuyển đổi số lượng logo sau mỗi 5 giây
setInterval(function() {
  if (window.innerWidth >= 767) {
    showNextLogos();
  }
}, 5000);

// Thay đổi số lượng logo tùy thuộc vào kích thước màn hình
window.addEventListener("resize", function () {
  if (window.innerWidth >= 767) {
    numLogosToShow = 4;
    showNextLogos();
  } else {
    numLogosToShow = 1;
    setTimeout(showNextLogos, 3000);
  }
});

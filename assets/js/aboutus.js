const logos = document.querySelectorAll('.logo-grid img');
let currentLogoIndex = 0;

function showNextLogos() {
  // Ẩn 4 logo hiện tại
  for (let i = currentLogoIndex; i < currentLogoIndex + 4; i++) {
    logos[i].style.display = 'none';
  }

  // Tính toán chỉ số của 4 logo tiếp theo
  currentLogoIndex += 4;
  if (currentLogoIndex >= logos.length) {
    currentLogoIndex = 0;
  }

  // Hiển thị 4 logo mới
  for (let i = currentLogoIndex; i < currentLogoIndex + 4; i++) {
    logos[i].style.display = 'block';
  }
}

// Hiển thị 4 logo đầu tiên
showNextLogos();

// Thực hiện hành động chuyển đổi 4 logo sau mỗi 5 giây
setInterval(showNextLogos, 5000);

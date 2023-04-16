const logos = document.querySelectorAll('.logo-grid img');
let currentLogoIndex = 0;
let numLogosToShow = 1;

function showNextLogos() {
  // Ẩn số lượng logo hiện tại
  for (let i = currentLogoIndex; i < currentLogoIndex + numLogosToShow; i++) {
    logos[i].style.display = 'none';
  }

  // Tính toán chỉ số của số lượng logo tiếp theo
  currentLogoIndex += numLogosToShow;
  if (currentLogoIndex >= logos.length) {
    currentLogoIndex = 0;
  }

  // Hiển thị số lượng logo mới
  for (let i = currentLogoIndex; i < currentLogoIndex + numLogosToShow; i++) {
    if (i < logos.length) {
      logos[i].style.display = 'block';
    }
  }
}

// Ẩn tất cả logo trừ logo đầu tiên khi đang ở dạng responsive
if (window.innerWidth < 767) {
  for (let i = 1; i < logos.length; i++) {
    logos[i].style.display = 'none';
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

if (window.innerWidth <= 767) {
  numLogosToShow = 1;
  showNextLogos();
} else {
  numLogosToShow = 4;
  setTimeout(showNextLogos, 3000);
}

// Thực hiện hành động chuyển đổi số lượng logo sau mỗi 5 giây
setInterval(function() {
  if (window.innerWidth >= 767) {
    showNextLogos();
  }
}, 3000);
setInterval(function() {
  if (window.innerWidth <= 767) {
    showNextLogos();
  }
}, 5000);

// Thay đổi số lượng logo tùy thuộc vào kích thước màn hình
window.addEventListener('resize', function() {
  if (window.innerWidth >= 767) {
    numLogosToShow = 4;
    showNextLogos();
  } else {
    numLogosToShow = 1;
    setTimeout(showNextLogos, 3000);
  }
});
window.addEventListener('resize', function() {
  if (window.innerWidth <= 767) {
    numLogosToShow = 1;
    showNextLogos();
  } else {
    numLogosToShow = 4;
    setTimeout(showNextLogos, 3000);
  }
});

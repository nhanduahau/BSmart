// const logos = Array.from(
//   document.querySelectorAll(".slide-logo .logo-grid .logo-grid-item img")
// );
// const logoContainer = document.querySelector(".slide-logo .logo-grid ");
// const prevBtn = document.querySelector(".prev-btn");
// const nextBtn = document.querySelector(".next-btn");
// const dotsContainer = document.querySelector(".navigation-dots");

// let dots = [];
// let currentLogoIndex = 0;
// let numLogosToShow = getImagesPerSlide();
// let changeLogo = false;
// // Tạo và xử lý nút chấm bên dưới slide
// for (let i = 0; i < Math.ceil(logos.length / numLogosToShow); i++) {
//   const dot = document.createElement("span");
//   dot.classList.add("dot");
//   setTimeout(() => {
//     dot.addEventListener("click", () => {
//       showLogo(i * numLogosToShow);
//       const activeDotIndex = Math.floor(currentLogoIndex / numLogosToShow);
//       updateActiveDot(activeDotIndex);
//     });
//   }, 1000);
//   dotsContainer.appendChild(dot);
//   dots.push(dot);
// }
// // set trang đầu tiên và active dot
// logos
//   .slice(0, numLogosToShow)
//   .forEach((image) => image.classList.add("active-slide"));
// dots[0].classList.add("active");

// function showLogo(logoIndex) {
//   currentLogoIndex = logoIndex;
//   const logoGridItemWidth = logos[0].offsetWidth;
//   logoContainer.style.transform = `translateX(-${
//     logoIndex * logoGridItemWidth
//   }px)`;
//   for (let i = 0; i < logos.length; i++) {
//     logos[i].style.display = "none";
//     // logos[i].style.opacity = "0";
//   }
//   for (let i = logoIndex; i < logoIndex + numLogosToShow; i++) {
//     if (logos[i]) {
//       logos[i].style.display = "block";
//       // logos[i].style.opacity = "1";
//     }
//   }
//   // ẩn các hình trong 1 trang slide
//   logos.forEach((image) => image.classList.remove("active-slide"));
//   // hiển thị hình trong 1 trang slide
//   logos.forEach((image) => image.classList.add("active-slide"));
//   updateActiveDot(logoIndex);
// }
// //cập nhật active dot
// function updateActiveDot(logoIndex) {
//   dots.forEach((dot, i) => {
//     if (i === logoIndex) {
//       dot.classList.add("active");
//     } else {
//       dot.classList.remove("active");
//     }
//   });
// }

// function showNextLogos() {
//   if (!changeLogo) {
//     changeLogo = true;
//     const logoGridItemWidth = logos[0].offsetWidth;
//     logoContainer.style.transform = `translateX(-${
//       currentLogoIndex * logoGridItemWidth
//     }px)`;
//     currentLogoIndex += numLogosToShow;
//     if (currentLogoIndex >= logos.length) {
//       currentLogoIndex = 0;
//     }
//     showLogo(currentLogoIndex);
//     const activeDotIndex = Math.floor(currentLogoIndex / numLogosToShow);
//     updateActiveDot(activeDotIndex);
//     setTimeout(() => {
//       changeLogo = false;
//     }, 1000); //sau 1s cho phép click lại để set false -> true
//   }
// }
// function showPrevLogos() {
//   if (!changeLogo) {
//     changeLogo = true;
//     currentLogoIndex -= numLogosToShow;
//     if (currentLogoIndex < 0) {
//       currentLogoIndex = logos.length - numLogosToShow;
//     }
//     showLogo(currentLogoIndex);
//     const activeDotIndex = Math.floor(currentLogoIndex / numLogosToShow);
//     updateActiveDot(activeDotIndex);
//     setTimeout(() => {
//       changeLogo = false;
//     }, 1000); //sau 1s cho phép click lại để set false -> true
//   }
// }
// // Hiển thị số lượng logo đầu tiên tùy thuộc vào màn hình
// function getImagesPerSlide() {
//   if (window.innerWidth >= 767) {
//     return 4;
//   } else {
//     return 1;
//   }
// }
// // Thực hiện hành động chuyển đổi số lượng logo sau mỗi 5 giây
// if (!changeLogo) {
//   setInterval(showNextLogos, 5000);
// }
// // Thay đổi số lượng logo tùy thuộc vào kích thước màn hình
// window.addEventListener("resize", function () {
//   if (window.innerWidth >= 767) {
//     numLogosToShow = 4;
//   } else {
//     numLogosToShow = 1;
//   }
//   // Cập nhật lại dot
//   const numPages = Math.ceil(logos.length / numLogosToShow);
//   if (numPages !== dots.length) {
//     if (numPages > dots.length) {
//       for (let i = dots.length; i < numPages; i++) {
//         const dot = document.createElement("span");
//         dot.classList.add("dot");
//         dot.addEventListener("click", () => {
//           showLogo(i * numLogosToShow);
//         });
//         dotsContainer.appendChild(dot);
//         dots.push(dot);
//       }
//     } else {
//       for (let i = dots.length - 1; i >= numPages; i--) {
//         dotsContainer.removeChild(dots[i]);
//         dots.pop();
//       }
//     }
//   }
//   // Thiết lập lại active dot cho trang đầu tiên
//   currentLogoIndex = 0;
//   showLogo(currentLogoIndex);
// });

const logos = Array.from(
  document.querySelectorAll(".logo-slide .logo-wrapper .swiper-slide img")
);
const dotsContainer = document.querySelector(".navigation-dots");
let dots = [];
let currentLogoIndex = 0;
let changeLogo = false;
function getImagesPerSlide() {
  if (window.innerWidth >= 767) {
    return 4;
  } else {
    return 1;
  }
}
let numLogosToShow = getImagesPerSlide();
window.addEventListener("resize", function () {
  numLogosToShow = getImagesPerSlide();
  swiper.params.slidesPerView = numLogosToShow;
  swiper.params.slidesPerGroup = numLogosToShow;
  swiper.update();
});
let swiper = new Swiper(".swiper-container", {
  slidesPerView: numLogosToShow,
  slidesPerGroup: numLogosToShow,
  speed: 2000,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
});
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

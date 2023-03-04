// Render card
let renderCardCourse = document.getElementById("render-card-courses");
let totalCourseInPayment = document.getElementById("quantity-courses-payment");
let html;
let htmls;

// fake Data
let arrCourses = [
  {
    id: 1,
    nameCourse: "Front end Basic",
    desc: "T3-T4 (10:10)",
    nameMentor: "Mentor Cường",
    time: "22/12/2022 (10:10)",
    balance: 1200000,
    quantity: 1,
  },
  {
    id: 2,
    nameCourse: "Front end Basic Nâng Cao",
    desc: "T6-T7 (02:02)",
    nameMentor: "Mentor Cường",
    time: "11/11/2022 (02:02)",
    balance: 1500000,
    quantity: 1,
  },
  {
    id: 2,
    nameCourse: "JavaScript Nâng Cao",
    desc: "CN (12:12)",
    nameMentor: "Mentor Cường",
    time: "15/2/2022 (12:12)",
    balance: 2200000,
    quantity: 1,
  },
];

htmls = arrCourses.map((course) => {
  return `
    <div class="card1-container mb-2 w-100 card-course-item-${course.id}">
      <div class="card1-inner">
        <div class="avatar"></div>

        <div class="card1-info">
          <div class="card1-info-header">
            <div class="d-flex align-items-center">
              <h1 class="me-2">Tên khóa học: </h1>
              <p>${course.nameCourse}</p>
            </div>

            <div class="d-flex align-items-center">
              <h1 class="me-2">Thông tin khóa học: </h1>
              <p>${course.desc}</p>
            </div>
          </div>

          <div class="card1-info-footer">
            <div class="d-flex align-items-center">
              <h1 class="me-2">Mentor: </h1>
              <p>${course.nameMentor}</p>
            </div>

            <div class="d-flex align-items-center">
              <h1 class="me-2">Thời gian dự kiến mở lớp: </h1>
              <p>${course.time}</p>
            </div>
          </div>

          <div class="card1-total-price">
            <div class="card1-total-price-cost">
              <h1>Số tiền gốc: </h1>
              <p>${course.balance}</p>
            </div>
              
            <div class="card1-total-price-quantity">
              <h1>Số lượng: </h1>
              <p>${course.quantity}</p>
            </div>
          </div>
        </div>
       
        <div class="card1-total-price-total-cost">
          <button class="card1-total-price-btn-delete" id="btn-del-card-course" onclick="handleDeleteCardCourse(${course.id})">Xóa</button>
        </div>
      </div>
    </div>
  `;
});

html = htmls.join("");
renderCardCourse.innerHTML = html;
// Render card

// Total course in payment
totalCourseInPayment.innerHTML = arrCourses.length;

// delete card course
function handleDeleteCardCourse(id) {
  var cardCourseItem = document.querySelector(".card-course-item-" + id);
  var card1Elements;

  if (cardCourseItem) {
    cardCourseItem.remove();

    // update total course in payment
    card1Elements = document.querySelectorAll(".card1-container");
    totalCourseInPayment.innerHTML = card1Elements.length;
  }
}

// Payment with momo
var btnMomo = document.getElementById("btn-momo");
var countDown = document.getElementById("countdown");

btnMomo.addEventListener("click", function () {
  var countMomo = 100;
  console.log("->", btnMomo);

  var interval = setInterval(function () {
    countDown.innerHTML = countMomo;
    countMomo--;
    if (countMomo <= 0) {
      clearInterval(interval);
    }
  }, 1000);
});

// xóa khóa học
// const cards = document.querySelectorAll(".card");
// cards.forEach((card) => {
//   card.addEventListener("mouseover", () => {
//     const deleteBtn = card.querySelector(".card1-total-price-btn-delete");
//     deleteBtn.style.display = "block";
//   });
//   card.addEventListener("mouseout", () => {
//     const deleteBtn = card.querySelector(".card1-total-price-btn-delete");
//     deleteBtn.style.display = "none";
//   });
// });
// const deleteBtns = document.querySelectorAll(".card1-total-price-btn-delete");
// deleteBtns.forEach((deleteBtn) => {
//   deleteBtn.addEventListener("click", () => {
//     const card = deleteBtn.closest(".card1");
//     card.remove();
//   });
// });

// đếm giây not success
var btnNotSuccess = document.getElementById("notification-not-success-payment");
var countdownNotSuccess = document.getElementById("countdown-not-success");
var modal = document.getElementById("modal");

btnNotSuccess.addEventListener("click", function () {
  var countNotSuccess = 10;

  var interval = setInterval(function () {
    countNotSuccess--;
    countdownNotSuccess.innerHTML = countNotSuccess;
    if (countNotSuccess <= 0) {
      clearInterval(interval);
      // tắt modal đi
      modal.classList.add("hidden-1");
    }
  }, 1000);
});

// đếm giây payment success
var btnSuccess = document.getElementById("notification-success-payment");
var countdownSuccess = document.getElementById("countdown-success");
btnSuccess.addEventListener("click", function () {
  var countSuccess = 10;

  var interval = setInterval(function () {
    countSuccess--;
    countdownSuccess.innerHTML = countSuccess;

    if (countSuccess <= 0) {
      clearInterval(interval);
      // Thực hiện hành động khi đếm ngược kết thúc, ví dụ chuyển hướng trang
      window.location.href = "http://127.0.0.1:5502/member-detail.html";
    }
  }, 1000);
});

// Điều kiện lúc thanh toán
var btnPayment = document.getElementById("total-course-cash-payment-btn");
btnPayment.addEventListener("click", function (e) {
  e.preventDefault();

  console.log("btn payment");

  var balance = document
    .querySelector(".total-course-cash-balance")
    .textContent.replace(/\./g, "")
    .replace(" đ", "");
  var payment = document
    .querySelector(".total-course-cash-balance-1")
    .textContent.replace(/\./g, "")
    .replace(" đ", "");

  if (parseInt(balance) < parseInt(payment)) {
    alert("Không đủ tiền để thanh toán");
    return false;
  }

  // Thực hiện thanh toán nếu đủ tiền
  // window.location.href = "";
});

//tính toán số dư khi thanh toán
// Lấy giá trị của hai phần tử HTML
var balance1 = document.querySelector(".total-course-cash-balance").innerText;
var payment1 = document.querySelector(".total-course-cash-balance-1").innerText;

// Xử lý chuỗi và tính toán hiệu
balance1 = parseInt(balance1.replace(/\D/g, ""));
payment1 = parseInt(payment1.replace(/\D/g, ""));

var remaining1 = balance1 - payment1;

// Gán kết quả vào phần tử HTML
document.querySelector(".total-course-cash-balance-2").innerText =
  remaining1.toLocaleString("vi-VN") + " VND";

//đếm item
// Lấy tất cả các phần tử có class="card-1"
// const card1Elements = document.querySelectorAll(".card1");

// Đếm số lượng phần tử đó
// const card1Count = card1Elements.length;

// Tạo thẻ p và thêm nội dung số lượng vào đó
// const pElement = document.getElementById("so-luong-div"); //createElement('p');
// pElement.innerHTML = `Bạn có ${card1Count} khóa học trong giỏ hàng`;

// Thêm thẻ p vào phần tử có class="so-luong"
// const soLuongElement = document.querySelector(".so-luong");
// soLuongElement.appendChild(pElement);

// Show payment cash
var btnPaymentCash = document.getElementById("total-course-icon-item-btn");
var showPaymentCash = document.getElementById("total-course-cash-show");
btnPaymentCash.addEventListener("click", function (e) {
  $(showPaymentCash).toggle();
});



//kết quả tạm tính
// Lấy danh sách các khóa học
const courses = [...document.querySelectorAll('.card1-info')];

// Tính tổng số tiền của các khóa học
const totalPrice = courses.reduce((total, course) => {
  const balance = parseFloat(course.querySelector('.card1-total-price-cost p').textContent);
  return total + balance;
}, 0);

// Hiển thị giá trị tạm tính được với dấu chấm mỗi 3 số và đơn vị VND
const formattedPrice = totalPrice.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'});
document.querySelector('.bill-member-item-price').textContent = formattedPrice;

// Tính tổng tiền sau khi trừ giảm giá và hiển thị số tiền giảm giá
const discountPrice4 = 200000; // Giả sử giá giảm giá là 200,000 VND
const formattedDiscountPrice = discountPrice4.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'});
document.querySelector('.bill-member-item-price-1').textContent = formattedDiscountPrice;
const totalAfterDiscount = totalPrice - discountPrice4;
var moneyafter = document.getElementById("moneyafter");
moneyafter.innerHTML=totalAfterDiscount
// Hiển thị giá trị tổng tiền tính được với dấu chấm mỗi 3 số và đơn vị VND
const formattedTotalAfterDiscount = totalAfterDiscount.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'});
document.querySelector('.bill-member-item-price-2').textContent = formattedTotalAfterDiscount;

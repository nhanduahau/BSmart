// Điều kiện lúc thanh toán
var btnPayment = document.getElementById("total-course-cash-payment-btn");
var bgContainerMomo = document.querySelector(".total-course-icon-item-momo");
var bgContainerViettelPay = document.querySelector(
  ".total-course-icon-item-viettel-pay"
);
var btnMomo = document.getElementById("btn-momo");
var btnViettelPay = document.getElementById("btn-viettel-1");
var valueMomo;
var valueViettelPay;
var radios = document.getElementsByName("groupOfDefaultRadios");

// clicked button momo
// btnMomo.addEventListener("click", function () {
//   bgContainerMomo.classList = "total-course-icon-item-viettel-pay-active";
//   valueMomo = "momo";
//   valueViettelPay = "";

//   bgContainerViettelPay.classList.remove(
//     "total-course-icon-item-viettel-pay-active"
//   );
//   bgContainerViettelPay.classList =
//     "total-course-icon-item-viettel-pay-none-active";
// });

// // clicked button viettel pay
// btnViettelPay.addEventListener("click", function () {
//   bgContainerViettelPay.classList = "total-course-icon-item-momo-active";
//   valueViettelPay = "viettel-pay";
//   valueMomo = "";

//   bgContainerMomo.classList.remove("total-course-icon-item-momo-active");
//   bgContainerMomo.classList = "total-course-icon-item-momo-none-active";
// });

// clicked button payment
// btnPayment.addEventListener("click", function (e) {
//   e.preventDefault();

//   if (valueMomo == "momo") {
//     console.log("momo");
//   } else if (valueViettelPay == "viettel-pay") {
//     console.log("viettel-pay");
//   }

//   var balance = document
//     .querySelector(".total-course-cash-balance")
//     .textContent.replace(/\./g, "")
//     .replace(" đ", "");
//   var payment = document
//     .querySelector(".total-course-cash-balance-1")
//     .textContent.replace(/\./g, "")
//     .replace(" đ", "");

//   if (parseInt(balance) < parseInt(payment)) {
//     alert("Không đủ tiền để thanh toán");
//     return false;
//   }

//   // Thực hiện thanh toán nếu đủ tiền
//   // window.location.href = "";
// });

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

// Show payment cash
// var btnPaymentCash = document.getElementById("total-course-icon-item-btn");
// var showPaymentCash = document.getElementById("total-course-cash-show");

// btnPaymentCash.addEventListener("click", function (e) {
//   $(showPaymentCash).toggle();
// });

//kết quả tạm tính
// Lấy danh sách các khóa học
const courses = [...document.querySelectorAll(".card1-info")];

// Tính tổng số tiền của các khóa học
const totalPrice = courses.reduce((total, course) => {
  const balance = parseFloat(
    course.querySelector(".card1-total-price-cost p").textContent
  );
  return total + balance;
}, 0);

// Hiển thị giá trị tạm tính được với dấu chấm mỗi 3 số và đơn vị VND
const formattedPrice = totalPrice.toLocaleString("vi-VN", {
  style: "currency",
  currency: "VND",
});
document.querySelector(".bill-member-item-price").textContent = formattedPrice;

// Tính tổng tiền sau khi trừ giảm giá và hiển thị số tiền giảm giá
const discountPrice4 = 200000; // Giả sử giá giảm giá là 200,000 VND
const formattedDiscountPrice = discountPrice4.toLocaleString("vi-VN", {
  style: "currency",
  currency: "VND",
});
document.querySelector(".bill-member-item-price-1").textContent =
  formattedDiscountPrice;
const totalAfterDiscount = totalPrice - discountPrice4;

const formattedTotalAfterDiscount = totalAfterDiscount.toLocaleString("vi-VN", {
  style: "currency",
  currency: "VND",
});
document.querySelector(".bill-member-item-price-2").textContent =
  formattedTotalAfterDiscount;

//
let totalCourseInPayment = document.getElementById("quantity-courses-payment");

// Total course in payment
totalCourseInPayment.textContent =
  document.querySelectorAll(".card-course-item").length;

// delete card course
function handleDeleteCardCourse() {
  let cardCourseItem = document.querySelector(".card-course-item");
  let card1Elements;

  if (cardCourseItem) {
    cardCourseItem.remove();

    // update total course in payment
    card1Elements = document.querySelectorAll(".card-course-item");
    totalCourseInPayment.textContent = card1Elements.length;
  }
}

//Yêu cầu hiển thị ở số tiền gốc
const totalPriceElement = document.getElementById("total-price");
const totalPrice1 = parseInt(totalPriceElement.textContent);
const formattedPrice1 = totalPrice.toLocaleString("vi-VN", {
  style: "currency",
  currency: "VND",
});
totalPriceElement.textContent = formattedPrice1;

// BSmart
var selectBsmartSelectPayConfirm = document.getElementById('select-pay-confirm')
var billBsmartPayNumber = document.querySelector('.bill-bsmart-pay-number')
var showBsmartNumber = document.querySelector('.bill-member-item-price-bsmart-pay-number')
var showBsmartLabel = document.querySelector('.bill-member-item-price-bsmart-pay-label')
var bsmartInWallet = document.querySelector('.bsmart-pay-number')

selectBsmartSelectPayConfirm.addEventListener('change', function() {
  if(selectBsmartSelectPayConfirm.value == 'bsmart-use') {
    billBsmartPayNumber.style.cssText = `block; align-items: center;`
    showBsmartLabel.style.display = 'block'
    showBsmartNumber.innerHTML = parseInt(bsmartInWallet.innerText).toLocaleString('vi-VN') + ' ₫';
  } else {
    billBsmartPayNumber.style.display = 'none'
  }
})

var btnMomo = document.getElementById('btn-momo')
var countDown = document.getElementById("countdown");

btnMomo.addEventListener('click', function() { 
  var countMomo = 100;
    console.log('->', btnMomo)

    var interval = setInterval(function() {
      countDown.innerHTML = countMomo;
      countMomo--;
        if (countMomo <= 0) {
          clearInterval(interval);
        }
    }, 1000);
})
    

// xóa khóa học
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    const deleteBtn = card.querySelector(".card1-total-price-btn-delete");
    deleteBtn.style.display = "block";
  });
  card.addEventListener("mouseout", () => {
    const deleteBtn = card.querySelector(".card1-total-price-btn-delete");
    deleteBtn.style.display = "none";
  });
});
const deleteBtns = document.querySelectorAll(".card1-total-price-btn-delete");
deleteBtns.forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", () => {
    const card = deleteBtn.closest(".card1");
    card.remove();
  });
});

// đếm giây not success
var btnNotSuccess = document.getElementById('notification-not-success-payment')
var countdownNotSuccess = document.getElementById("countdown-not-success");
var modal = document.getElementById("modal");

btnNotSuccess.addEventListener('click', function() { 
  var countNotSuccess = 10;
  
  var interval = setInterval(function() {
    countNotSuccess--;
    countdownNotSuccess.innerHTML = countNotSuccess;
    if (countNotSuccess <= 0) {
      clearInterval(interval);
      // tắt modal đi
      modal.classList.add("hidden-1");
    }
  }, 1000);
})


// đếm giây payment success
var btnSuccess = document.getElementById('notification-success-payment')
var countdownSuccess = document.getElementById("countdown-success");
btnSuccess.addEventListener('click', function() { 
  var countSuccess = 10;
  
  var interval = setInterval(function() {
    countSuccess--;
    countdownSuccess.innerHTML = countSuccess;

    if (countSuccess <= 0) {
      clearInterval(interval);
      // Thực hiện hành động khi đếm ngược kết thúc, ví dụ chuyển hướng trang
      window.location.href = "http://127.0.0.1:5502/member-detail.html";
    }
    
  }, 1000);
})

// Điều kiện lúc thanh toán
var btnPayment = document.getElementById('total-course-cash-payment-btn')
btnPayment.addEventListener('click', function(e) {
  e.preventDefault();

  console.log('btn payment')
  
  var balance = document.querySelector('.total-course-cash-balance').textContent.replace(/\./g, '').replace(' đ', '');
  var payment = document.querySelector('.total-course-cash-balance-1').textContent.replace(/\./g, '').replace(' đ', '');
  
  if (parseInt(balance) < parseInt(payment)) {
    alert("Không đủ tiền để thanh toán");
    return false;
  }
  
  // Thực hiện thanh toán nếu đủ tiền
  // window.location.href = "";
})

//tính toán số dư khi thanh toán
// Lấy giá trị của hai phần tử HTML
var balance1 = document.querySelector('.total-course-cash-balance').innerText;
var payment1 = document.querySelector('.total-course-cash-balance-1').innerText;

// Xử lý chuỗi và tính toán hiệu
balance1 = parseInt(balance1.replace(/\D/g, ''));
payment1 = parseInt(payment1.replace(/\D/g, ''));

var remaining1 = balance1 - payment1;

// Gán kết quả vào phần tử HTML
document.querySelector('.total-course-cash-balance-2').innerText = remaining1.toLocaleString('vi-VN') + ' VND';


//đếm item
// Lấy tất cả các phần tử có class="card-1"
const card1Elements = document.querySelectorAll('.card1');

// Đếm số lượng phần tử đó
const card1Count = card1Elements.length;

// Tạo thẻ p và thêm nội dung số lượng vào đó
const pElement = document.getElementById('so-luong-div') //createElement('p');
pElement.innerHTML = `Bạn có ${card1Count} khóa học trong giỏ hàng`;

// Thêm thẻ p vào phần tử có class="so-luong"
const soLuongElement = document.querySelector('.so-luong');
soLuongElement.appendChild(pElement);


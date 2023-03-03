var btnMomo = document.getElementById('btn-momo')
var countdown = document.getElementById("countdown");
var count = 100;

btnMomo.addEventListener('click', function() { 
    console.log('->', btnMomo)

    var interval = setInterval(function() {
        countdown.innerHTML = count;
        count--;
        if (count < 0) clearInterval(interval);
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
// đếm giây payment success
var btnSuccess = document.getElementById('btn-success')
var countdown = document.getElementById("countdown-1");
var count = 10;
btnSuccess.addEventListener('click', function() { 
  console.log('->', btn-success)
  var interval = setInterval(function() {
    document.getElementById("countdown-1").innerHTML = count;
    count--;
    if (count < 0) {
      clearInterval(interval);
      // Thực hiện hành động khi đếm ngược kết thúc, ví dụ chuyển hướng trang
      window.location.href = "";
    }
  }, 1000);
})

//   var btnSuccess = document.getElementById('btn-success')
// var countdown = document.getElementById("countdown-1");
// var count = 10;

// btn-success.addEventListener('click', function() { 
//     console.log('->', btn-success)

//     var interval = setInterval(function() {
//       document.getElementById("countdown-1").innerHTML = count;
//         count--;
//         if (count < 0) {
//         clearInterval(interval);
//          // Thực hiện hành động khi đếm ngược kết thúc, ví dụ chuyển hướng trang
//       window.location.href = "https://vnexpress.net/";
//         }
//     }, 1000);
// })


// Điều kiện lúc thanh toán
function checkBalance(e) {
  e.preventDefault();

  var balance = document.querySelector('.total-course-cash-balance').textContent.replace(/\./g, '').replace(' đ', '');
  var payment = document.querySelector('.total-course-cash-balance-1').textContent.replace(/\./g, '').replace(' đ', '');
  
  if (parseInt(balance) < parseInt(payment)) {
    alert("Không đủ tiền để thanh toán");
    return false;
  }
  
  // Thực hiện thanh toán nếu đủ tiền
  window.location.href = "";
}

//tính toán số dư khi thanh toán
// Lấy giá trị của hai phần tử HTML
var balance1 = document.querySelector('.total-course-cash-balance').innerText;
var payment1 = document.querySelector('.total-course-cash-balance-1').innerText;

// Xử lý chuỗi và tính toán hiệu
balance1 = parseInt(balance1.replace(/\D/g, ''));
payment1 = parseInt(payment1.replace(/\D/g, ''));

var remaining1 = balance1 - payment1;

// Gán kết quả vào phần tử HTML
document.querySelector('.total-course-cash-balance-2').innerText = remaining1.toLocaleString('vi-VN') + ' đ';


//đếm item
var parent = document.querySelector('.so-luong');
var count = parent.querySelectorAll('.card-1').length;
var countP = parent.querySelector('.count-1-1');
countP.innerHTML = '(' + count + ') items';

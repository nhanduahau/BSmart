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


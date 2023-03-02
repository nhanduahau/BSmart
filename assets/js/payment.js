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
const cards = document.querySelectorAll(".card1, .card2");

for (let i = 0; i < cards.length; i++) {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Xóa";
  deleteButton.classList.add("card1-total-price-btn-delete");
  deleteButton.addEventListener("click", () => {
    cards[i].remove();
  });
  const cardTotalPrice = cards[i].querySelector(".card1-total-price-total-cost");
  cardTotalPrice.appendChild(deleteButton);
}

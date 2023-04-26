function showMore(id) {
  var element = document.getElementById(id);
  var arrowDown = element.previousElementSibling.querySelector('.fa-arrow-down');
  var arrowUp = element.previousElementSibling.querySelector('.fa-arrow-up');

  if (window.innerWidth >= 767) {
    element.style.display = 'block';
    arrowDown.style.display = 'none';
    arrowUp.style.display = 'block';
  } else {
    if (element.style.display === '' || element.style.display === 'none') { // Fix here
      element.style.display = 'block';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'block';
    } else {
      element.style.display = 'none';
      arrowDown.style.display = 'block';
      arrowUp.style.display = 'none';
    }
  }
}


var slider = document.querySelector(".slider-range");
var value = document.querySelector("#slider-value");

slider.oninput = function() {
  var maxFormattedValue = numberWithCommas(this.max) + " VND";
  var formattedValue = "Từ " + numberWithCommas(this.min) + " VND đến " + numberWithCommas(this.value) + " VND";
  value.textContent = formattedValue;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}




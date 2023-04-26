function showMore(id) {
  var element = document.getElementById(id);
  var arrowDown =
    element.previousElementSibling.querySelector(".fa-arrow-down");
  var arrowUp = element.previousElementSibling.querySelector(".fa-arrow-up");

  if (window.innerWidth >= 767) {
    element.style.display = "block";
    arrowDown.style.display = "none";
    arrowUp.style.display = "block";
  } else {
    if (element.style.display === "" || element.style.display === "none") {
      // Fix here
      element.style.display = "block";
      arrowDown.style.display = "none";
      arrowUp.style.display = "block";
    } else {
      element.style.display = "none";
      arrowDown.style.display = "block";
      arrowUp.style.display = "none";
    }
  }
}

// var slider = document.querySelector(".slider-range");
// var value = document.querySelector("#slider-value");

// slider.oninput = function () {
//   var formattedValue = numberWithCommas(this.value) + " VND";
//   value.textContent = "Tối đa: " + formattedValue;
// };

// function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

// price course
const formatterPrice = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "VND",
}); //vi-VN
const priceFromInput = document.getElementById("price-from");
const priceToInput = document.getElementById("price-to");

const priceFromError = document.getElementById("message-error-price-from");
const priceToError = document.getElementById("message-error-price-to");
const messageErrorPriceRange = document.getElementById(
  "message-error-price-range"
);
let priceFrom;
let priceTo;
priceFromInput.addEventListener("input", function () {
  let priceFromValue = priceFromInput.value;
  priceFrom = parseFloat(
    priceFromValue.replace(/[^\d]/g, "").replace(/\D/g, "")
  );
  let formattedPriceFrom = formatterPrice.format(priceFrom);
  const showPriceFrom = formattedPriceFrom.replace(/[^\d.-]/g, "") + " VNĐ";
  console.log(priceFrom);
  if (priceFromValue.length > 0 && !isNaN(priceFrom)) {
    if (priceFrom < 1000000) {
      priceFromError.style.display = "block";
      priceFromInput.value = showPriceFrom;
      if (priceFrom > priceTo) {
        messageErrorPriceRange.style.display = "block";
      }
    } else {
      priceFromError.style.display = "none";
      priceFromInput.value = showPriceFrom;
    }
  } else {
    if (isNaN(priceFrom)) {
      priceFromInput.value = "";
    }
    priceFromError.style.display = "none";
  }
});

priceToInput.addEventListener("input", function () {
  let priceToValue = priceToInput.value;
  priceTo = parseFloat(priceToValue.replace(/[^\d]/g, "").replace(/\D/g, ""));
  let formattedPriceTo = formatterPrice.format(priceTo);
  const showPriceTo = formattedPriceTo.replace(/[^\d.-]/g, "") + " VNĐ";

  if (priceToInput.value.length > 0 && !isNaN(priceTo)) {
    if (priceTo > 10000000) {
      priceToError.style.display = "block";
      priceToInput.value = showPriceTo;
    } else {
      priceToError.style.display = "none";
      priceToInput.value = showPriceTo;
      console.log(priceTo);
    }
  } else {
    if (isNaN(priceTo)) {
      priceToInput.value = "";
    }
    priceToError.style.display = "none";
  }
});
function convertPrice() {
  console.log(priceToInput.value.length);

  // if (priceFromInput.value !== "" && priceToInput.value !== "") {
  //   const numericPriceFrom = parseInt(priceFromInput.value.replace(/\D/g, ""));
  //   const numericPriceTo = parseInt(priceToInput.value.replace(/\D/g, ""));

  //   if (numericPriceFrom > numericPriceTo) {
  //     priceFromInput.value = "";
  //     priceToInput.value = "";
  //     priceFromError.style.display = "block";
  //     priceToError.style.display = "block";
  //   }
  // }
}

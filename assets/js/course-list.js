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
const formatterPrice = new Intl.NumberFormat("vn-VN", {
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
priceFromInput.addEventListener("input", function () {
  let priceFromValue = priceFromInput.value;
  let priceFrom = parseFloat(
    priceFromValue.replace(/[^\d]/g, "").replace(/\D/g, "")
  );
  let formattedPriceFrom = formatterPrice
    .format(priceFrom)
    .replace(/[^\d.,]/g, "");
  const showPriceFrom = formattedPriceFrom + " VNĐ";
  const getPriceTo = parseFloat(
    priceToInput.value.replace(/[^\d]/g, "").replace(/\D/g, "")
  );

  if (priceFromValue.length > 0 && !isNaN(priceFrom)) {
    if (priceFrom < 1000000) {
      priceFromError.style.display = "block";
      priceFromInput.value = showPriceFrom;
    } else {
      priceFromError.style.display = "none";
      priceFromInput.value = showPriceFrom;
    }
    if (getPriceTo && getPriceTo < priceFrom) {
      messageErrorPriceRange.style.display = "block";
      console.log(getPriceTo);
    } else {
      messageErrorPriceRange.style.display = "none";
    }
  } else {
    if (isNaN(priceFrom)) {
      priceFromInput.value = "";
    }
    priceFromError.style.display = "none";
  }
});
priceFromInput.addEventListener("keydown", function (event) {
  if (event.code === "Backspace" || event.code === "Delete") {
    let priceFromValue = priceFromInput.value;
    priceFrom = parseFloat(
      priceFromValue.replace(/[^\d]/g, "").replace(/\D/g, "")
    );
    let formattedPriceFrom = formatterPrice
      .format(priceFrom)
      .replace(/[^\d.,]/g, "");
    priceFromInput.value = formattedPriceFrom;
  }
});
priceToInput.addEventListener("input", function () {
  let priceToValue = priceToInput.value;
  let priceTo = parseFloat(
    priceToValue.replace(/[^\d]/g, "").replace(/\D/g, "")
  );
  let formattedPriceTo = formatterPrice.format(priceTo).replace(/[^\d.,]/g, "");
  const showPriceTo = formattedPriceTo + " VNĐ";
  const getPriceFrom = parseFloat(
    priceFromInput.value.replace(/[^\d]/g, "").replace(/\D/g, "")
  );
  if (priceToInput.value.length > 0 && !isNaN(priceTo)) {
    if (priceTo > 10000000) {
      priceToError.style.display = "block";
      priceToInput.value = showPriceTo;
    } else {
      priceToError.style.display = "none";
      priceToInput.value = showPriceTo;
    }
    if (getPriceFrom && priceTo < getPriceFrom) {
      messageErrorPriceRange.style.display = "block";
      console.log(getPriceFrom);
    } else {
      messageErrorPriceRange.style.display = "none";
    }
  } else {
    if (isNaN(priceTo)) {
      priceToInput.value = "";
    }
    priceToError.style.display = "none";
  }
});
priceToInput.addEventListener("keydown", function (event) {
  if (event.code === "Backspace" || event.code === "Delete") {
    let priceToValue = priceToInput.value;
    priceTo = parseFloat(priceToValue.replace(/[^\d]/g, "").replace(/\D/g, ""));
    let formattedPriceTo = formatterPrice
      .format(priceTo)
      .replace(/[^\d.,]/g, "");
    priceToInput.value = formattedPriceTo;
  }
  // if (
  //   (event.code === "Backspace" || event.code === "Delete") &&
  //   priceToInput.selectionStart !== 0 &&
  //   priceToInput.selectionEnd === priceToInput.value.length
  // ) {
  //   event.preventDefault();
  //   priceToInput.value = "";
  // }
});

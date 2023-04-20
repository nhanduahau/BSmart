function toggleSchool() {
  var job = document.getElementById("job").value;
  var schoolName = document.getElementById("schoolNameWrap");
  var companyName = document.getElementById("companyNameWrap");
  if (job === "student") {
    schoolName.style.display = "block";
    companyName.style.display = "none";
  }
  if (job === "job") {
    companyName.style.display = "block";
    schoolName.style.display = "none";
  }
  if (job === "") {
    companyName.style.display = "none";
    schoolName.style.display = "none";
  }
}

// validate mail & phone number
var inputEmail = document.getElementById("mail");
var inputPhoneNumber = document.getElementById("phoneNumber");
var patternEmail = /^[a-zA-Z][^\s@]+@[^\s@]+\.[^\s@]+$/;
var patternPhoneNumber = /^(84|0[3|5|7|8|9])+([0-9]{8})\b$/;
var messageErrorNumPhone = document.getElementById(
  "message-error-number-phone"
);
var messageErrorMail = document.getElementById("message-error-mail");
messageErrorNumPhone.style.display = "none";
messageErrorMail.style.display = "none";

// check mail
inputEmail.addEventListener("keyup", function () {
  if (inputEmail.value.length > 0) {
    if (inputEmail.value.match(patternEmail)) {
      messageErrorMail.style.display = "none";
      return true;
    } else {
      messageErrorMail.style.display = "block";
      messageErrorMail.style.color = "red";
      return false;
    }
  } else {
    messageErrorMail.style.display = "none";
  }
});

// check phone number
inputPhoneNumber.addEventListener("keyup", function () {
  if (inputPhoneNumber.value.length > 0) {
    if (inputPhoneNumber.value.match(patternPhoneNumber)) {
      messageErrorNumPhone.style.display = "none";
      return true;
    } else {
      messageErrorNumPhone.style.display = "block";
      messageErrorNumPhone.style.color = "red";
      return false;
    }
  } else {
    messageErrorNumPhone.style.display = "none";
  }
});

// validate name input
var inputName = document.getElementById("name");
var patternName = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
var messageErrorName = document.getElementById("message-error-name");
messageErrorName.style.display = "none";

inputName.addEventListener("keyup", function () {
  const getName = inputName.value
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // lấy text nhập vào và bỏ dấu
  if (getName.length > 0) {
    if (patternName.test(getName)) {
      messageErrorName.style.display = "none";
      return true;
    } else {
      messageErrorName.style.display = "block";
      messageErrorName.style.color = "red";
      return false;
    }
  } else {
    messageErrorName.style.display = "none";
  }
});

// covert dd/mm/yyyy
// var input = document.getElementById("birth");
// console.log("hehe");
// input.addEventListener("change", function () {
//   var date = input.valueAsDate;
//   var formattedDate =
//     date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
//   input.value = formattedDate;
// });
// var input = document.getElementById("birth");
// console.log("hehe");
// input.addEventListener("change", function () {
//   var date = input.valueAsDate;
//   var formattedDate =
//     date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
//   input.value = formattedDate;
// });

// suggest input school name
const dataSchoolName = [
  "Đại học Văn Hiến",
  "Học viện Cán bộ Thành phố Hồ Chí Minh",
  "Học viện Công nghệ Bưu chính Viễn thông (Cơ sở phía Nam)",
  "Học viện Hàng không Việt Nam",
  "Học viện Kỹ thuật Mật mã (cơ sở phía Nam)",
  "Học viện Thanh thiếu niên Việt Nam (cơ sở phía Nam)",
  "Học viện Tư pháp (Cơ sở Thành Phố Hồ Chí Minh)",
  "Khoa Y - ĐH Quốc gia TP.HCM",
  "Nhạc viện Thành phố Hồ Chí Minh",
  "Phân hiệu Đại học Giao thông vận tải tại TP.HCM",
  "Trường Sĩ quan Kỹ thuật quân sự (Đại học Trần Đại Nghĩa)",
  "Đại học An ninh Nhân dân",
  "Đại học Bách Khoa - ĐHQG TP.HCM",
  "Đại học Cảnh sát nhân dân",
  "Đại học Công nghệ Sài Gòn",
  "Đại học Công nghệ Thành phố Hồ Chí Minh",
  "Đại học Công nghệ Thông tin - ĐH Quốc gia TP.HCM",
  "Đại học Công nghiệp Thành phố Hồ Chí Minh",
  "Đại học Công nghiệp Thực phẩm Thành phố Hồ Chí Minh",
  "Đại học FPT Hồ Chí Minh",
  "Đại học Gia Định",
  "Đại học Giao thông vận tải Thành phố Hồ Chí Minh",
  "Đại học Hoa Sen",
  "Đại học Hùng Vương Thành phố Hồ Chí Minh",
  "Đại học Khoa học Tự nhiên - ĐHQG TP Hồ Chí Minh",
  "Đại học Khoa học Xã hội và Nhân văn - ĐHQG TP.HCM",
  "Đại học Kiến trúc Thành phố Hồ Chí Minh",
  "Đại học Kinh tế - Luật (ĐH Quốc gia TP.HCM)",
  "Đại học Kinh tế - Tài chính TP.HCM",
  "Đại học Kinh tế TP. HCM",
  "Đại học Lao động Xã hội - Cơ sở 2 Tp.HCM",
  "Đại học Luật TP.HCM",
  "Đại học Mở Thành phố Hồ Chí Minh",
  "Đại học Mỹ thuật Công nghiệp Á Châu (Cơ sở TP HCM)",
  "Đại học Mỹ thuật Thành phố Hồ Chí Minh",
  "Đại học Ngân hàng TP. HCM",
  "Đại học Ngoại ngữ - Tin học TP.HCM",
  "Đại học Ngoại thương (Cơ sở TP.HCM)",
  "Đại học Nguyễn Tất Thành",
  "Đại học Công nghệ TP.HCM (HUTECH)",
];
const inputSchoolName = document.getElementById("schoolName");
const suggestSchoolName = document.getElementById("suggestSchoolName");

inputSchoolName.addEventListener("input", function () {
  const inputValue = this.value;
  suggestSchoolName.innerHTML = "";
  if (inputValue.length > 0) {
    const matchingData = dataSchoolName.filter(function (item) {
      return item.toLowerCase().includes(inputValue.toLowerCase());
    });
    console.log(matchingData);
    if (matchingData.length > 0) {
      const maxSuggestions = 5; // 5 gợi ý tối đa
      const suggestionsToShow = matchingData.slice(0, maxSuggestions);
      suggestionsToShow.forEach(function (item) {
        const divSuggestElement = document.createElement("div");
        divSuggestElement.className = "item-suggestion";
        divSuggestElement.textContent = item;
        divSuggestElement.addEventListener("click", function () {
          inputSchoolName.value = item;
          suggestSchoolName.style.display = "none";
        });
        suggestSchoolName.appendChild(divSuggestElement);
      });

      // Xử lý nếu có nhiều gợi ý hơn maxSuggestions
      if (matchingData.length > maxSuggestions) {
        const divShowMore = document.createElement("div");
        divShowMore.classList.add("show-more");
        divShowMore.textContent = "Xem thêm...";
        divShowMore.addEventListener("click", function () {
          const remainingSuggestions = matchingData.slice(maxSuggestions);
          remainingSuggestions.forEach(function (item) {
            const divSuggestElement = document.createElement("div");
            divSuggestElement.className = "item-suggestion";
            divSuggestElement.textContent = item;
            divSuggestElement.addEventListener("click", function () {
              inputSchoolName.value = item;
              suggestSchoolName.style.display = "none";
            });
            suggestSchoolName.appendChild(divSuggestElement);
          });
          divShowMore.style.display = "none";
        });
        suggestSchoolName.appendChild(divShowMore);
        console.log("click xme theme ne");
        // matchingData.forEach(function (item) {
        //   const divSuggestElement = document.createElement("div");
        //   divSuggestElement.className = "item-suggestion";
        //   divSuggestElement.textContent = item;
        //   divSuggestElement.addEventListener("click", function () {
        //     inputSchoolName.value = item;
        //     suggestSchoolName.style.display = "none";
        //   });
        //   suggestSchoolName.appendChild(divSuggestElement);
        // });
        //   const divHideItem = document.createElement("div"); // tạo nút "Thu gọn"
        //   divHideItem.classList.add("show-more");
        //   divHideItem.textContent = "Thu gọn";
        //   divHideItem.addEventListener("click", function () {
        //     suggestSchoolName.innerHTML = "";
        //     suggestionsToShow.forEach(function (item) {
        //       const divSuggestElement = document.createElement("div");
        //       divSuggestElement.className = "item-suggestion";
        //       divSuggestElement.textContent = item;
        //       divSuggestElement.addEventListener("click", function () {
        //         inputSchoolName.value = item;
        //         suggestSchoolName.style.display = "none";
        //       });
        //       suggestSchoolName.appendChild(divSuggestElement);
        //     });
        //     suggestSchoolName.appendChild(divSuggestElement);
        //   });
        //   suggestSchoolName.appendChild(divHideItem);
        // });
        suggestSchoolName.appendChild(divShowMore);
      }
      suggestSchoolName.style.display = "block";
    } else {
      suggestSchoolName.style.display = "none";
    }
  } else {
    suggestSchoolName.style.display = "none";
  }
});

document.addEventListener("click", function (event) {
  if (!inputSchoolName.contains(event.target)) {
    suggestSchoolName.style.display = "none";
  }
});

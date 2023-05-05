// autocomplete course name
let liContainer = document.querySelector(".autocom-box-search");
let courseNameInput = document.getElementById("search-course-inp");
let searchInput = document.querySelector(".sup-autocom-search");

courseNameInput.addEventListener("keyup", function () {
  fetch("https://645489c5f803f345762b1056.mockapi.io/courses", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log("data", data);

      let inpValue = courseNameInput.value;

      liContainer.style.display = "block";

      if (inpValue) {
        // add searchInp
        searchInput.classList.add("active");
        let filterKeyWord = data.filter(function (keyWord) {
          return keyWord.name.toLowerCase().includes(inpValue.toLowerCase());
        });
        // console.log("filterKeyWord", filterKeyWord);

        dataSuggestionWordsGenerator(filterKeyWord);
      } else {
        // remove searchInp
        searchInput.classList.remove("active");
      }
    });
});

// data
// let datas = [
//   "TypeScript",
//   "Swift",
//   "Scala",
//   "Objective-C",
//   "Shell",
//   "C",
//   "C#",
//   "CSS",
//   "C++",
//   "PHP",
//   "Ruby",
//   "Python",
//   "Java",
//   "JavaScript",
//   "Developer",
//   "Web Designer",
//   "Web Developer",
//   "Front-end Web Developer",
//   "Back-end Web Developer",
//   "Login Form in HTML & CSS",
//   "How to learn HTML & CSS",
//   "How to learn JavaScript",
// ];

// courseNameInput.addEventListener("keyup", function () {
//   let inpValue = courseNameInput.value;

//   liContainer.style.display = "block";

//   if (inpValue) {
//     // add searchInp
//     searchInput.classList.add("active");
//     let filterKeyWord = fetchApiCourses.filter(function (keyWord) {
//       return keyWord.name.toLowerCase().includes(inpValue.toLowerCase());
//     });

//     dataSuggestionWordsGenerator(filterKeyWord);
//   } else {
//     // remove searchInp
//     searchInput.classList.remove("active");
//   }
// });

// generate key word

let customListItem;
function dataSuggestionWordsGenerator(arrsKeyWord) {
  let keyWord = arrsKeyWord
    .map(function (word) {
      return "<li>" + word.name + "</li>";
    })
    .join("");

  if (keyWord) {
    liContainer.innerHTML = keyWord;
  } else {
    liContainer.innerHTML = "<li>" + courseNameInput.value + "</li>";
  }
  Select();
}
// select
function Select() {
  let allListItems = liContainer.querySelectorAll("li");
  allListItems.forEach(function (word) {
    word.addEventListener("click", function (e) {
      courseNameInput.value = e.target.textContent;
      liContainer.style.display = "none";
      // remove search inp
      searchInput.classList.remove("active");
    });
  });
}

// const logos = document.querySelectorAll(".logo-grid img");
// let currentLogoIndex = 0;
// let numLogosToShow = 1;
// let changeLogo = false;

// function showNextLogos() {
//   if (!changeLogo) {
//     changeLogo = true;
//     // Ẩn số lượng logo hiện tại
//     for (let i = currentLogoIndex; i < currentLogoIndex + numLogosToShow; i++) {
//       logos[i].style.display = "none";
//     }
//     // Tính toán chỉ số của số lượng logo tiếp theo
//     currentLogoIndex += numLogosToShow;
//     if (currentLogoIndex >= logos.length) {
//       currentLogoIndex = 0;
//     }
//     // Hiển thị số lượng logo mới
//     for (let i = currentLogoIndex; i < currentLogoIndex + numLogosToShow; i++) {
//       if (window.innerWidth >= 767) {
//         logos[i].style.display = "block";
//       } else {
//         logos[i].style.display = i === currentLogoIndex ? "block" : "none";
//       }
//     }
//     setTimeout(() => {
//       changeLogo = false;
//     }, 3000);
//   }
// }

// // Hiển thị số lượng logo đầu tiên tùy thuộc vào màn hình
// if (window.innerWidth >= 767) {
//   numLogosToShow = 4;
//   showNextLogos();
// } else {
//   numLogosToShow = 1;
//   showNextLogos();
// }

// // Thực hiện hành động chuyển đổi số lượng logo sau mỗi 3 giây
// setInterval(showNextLogos, 3000);

// // Thay đổi số lượng logo tùy thuộc vào kích thước màn hình
// window.addEventListener("resize", function () {
//   if (window.innerWidth >= 767) {
//     numLogosToShow = 4;
//     showNextLogos();
//   } else {
//     numLogosToShow = 1;
//     showNextLogos();
//   }
// });

// autocomplete course name
let liContainer = document.querySelector(".autocom-box-search");
let courseNameInput = document.getElementById("search-course-inp");
let searchInput = document.querySelector(".sup-autocom-search");

// data
let datas = [
  "TypeScript",
  "Swift",
  "Scala",
  "Objective-C",
  "Shell",
  "C",
  "C#",
  "CSS",
  "C++",
  "PHP",
  "Ruby",
  "Python",
  "Java",
  "JavaScript",
  "Developer",
  "Web Designer",
  "Web Developer",
  "Front-end Web Developer",
  "Back-end Web Developer",
  "Login Form in HTML & CSS",
  "How to learn HTML & CSS",
  "How to learn JavaScript",
];

courseNameInput.addEventListener("keyup", function () {
  let inpValue = courseNameInput.value;

  liContainer.style.display = "block";

  if (inpValue) {
    // add searchInp
    searchInput.classList.add("active");
    let filterKeyWord = datas.filter(function (keyWord) {
      return keyWord.toLowerCase().includes(inpValue.toLowerCase());
    });

    dataSuggestionWordsGenerator(filterKeyWord);
  } else {
    // remove searchInp
    searchInput.classList.remove("active");
  }
});

// generate key word
let customListItem;
function dataSuggestionWordsGenerator(arrsKeyWord) {
  let keyWord = arrsKeyWord
    .map(function (word) {
      return "<li>" + word + "</li>";
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

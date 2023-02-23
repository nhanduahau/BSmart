// Đã đăng ký và đã học khóa học
let studentRegisterCourse = false;

let btnIntro = document.getElementById("linkIntro");

console.log("btnIntro", btnIntro);

if (studentRegisterCourse === true) {
  btnIntro.style.display = "block";
} else {
  btnIntro.style.display = "none";
}

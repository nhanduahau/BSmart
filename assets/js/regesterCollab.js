function toggleSchool() {
  var job = document.getElementById("job").value;
  var schoolName = document.getElementById("schoolName");

  if (job === "student") {
    schoolName.style.display = "block";
  } else {
    schoolName.style.display = "none";
  }
}

// validate mail & phone number
var inputEmail = document.getElementById("mail");
var inpPhoneNumber = document.getElementById("phoneNumber");
var patternEmail =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var patternPhoneNumber = /^(84|0[3|5|7|8|9])+([0-9]{8})\b$/;
var messageErrorNumPhone = document.getElementById(
  "message-error-number-phone"
);
var messageErrorMail = document.getElementById("message-error-mail");
messageErrorNumPhone.style.display = "none";
messageErrorMail.style.display = "none";

function changeValueMail() {
  if (inputEmail.value.match(patternEmail)) {
    messageErrorMail.style.display = "none";
    return true;
  } else {
    messageErrorMail.style.display = "block";
    messageErrorMail.style.color = "red";
    return false;
  }
}

function changeValueNumberPhone() {
  if (inpPhoneNumber.value.match(patternPhoneNumber)) {
    messageErrorNumPhone.style.display = "none";
    return true;
  } else {
    messageErrorNumPhone.style.display = "block";
    messageErrorNumPhone.style.color = "red";
    return false;
  }
}

// covert dd/mm/yyyy
var input = document.getElementById("birth");
console.log("hehe");
input.addEventListener("change", function () {
  var date = input.valueAsDate;
  var formattedDate =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  input.value = formattedDate;
});

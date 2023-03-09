// const passwordInput = document.querySelector(".form-control[type='password']");
//   const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/;
  
//   passwordInput.addEventListener("input", () => {
//     const password = passwordInput.value;
//     const isValidPassword = passwordPattern.test(password);
//     if (!isValidPassword) {
//       passwordInput.setCustomValidity("Mật khẩu mới phải có ít nhất 6 ký tự, bao gồm ít nhất 1 số, 1 chữ hoa, 1 ký tự đặc biệt.");
//     } else {
//       passwordInput.setCustomValidity("");
//     }
//   });
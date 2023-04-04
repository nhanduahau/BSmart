var input = document.getElementById("Name1");
      var currency = " VND";
      
      input.addEventListener("input", function(e) {
        var value = e.target.value.replace(/\D/g, "");
        value = value.replace(/(\d)(?=(\d{3})+$)/g, "$1.");
      
        if (value === "") {
          e.target.value = "";
        } else {
          value += currency;
          e.target.value = value;
        }
      });
      
      input.addEventListener("keydown", function(e) {
        if (e.key === "Backspace") {
          // Lấy giá trị của input element
          var value = e.target.value;
          // Xóa đi ký tự cuối cùng nếu giá trị khác rỗng và ký tự cuối cùng là dấu chấm
          if (value !== "" && value.slice(-1) === ".") {
            value = value.slice(0, -1);
          }
          // Cập nhật lại giá trị của input element
          e.target.value = value.slice(0, -1);
          // Ngăn chặn hành động mặc định của phím backspace
          e.preventDefault();
        }
      });
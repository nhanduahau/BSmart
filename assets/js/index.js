$(document).ready(function() {
    $('#myModal').modal('show'); // Hiển thị pop-up khi trang web được tải
  
    // Xử lý sự kiện khi nhấn vào nút đóng pop-up
    $('#myModal .close').click(function() {
      $('#myModal').modal('hide'); // Ẩn pop-up
    });
  });
  
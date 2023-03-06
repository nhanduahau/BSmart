$(document).ready(function () {
  $("#example").DataTable({
    searching: false,
  });

  document.querySelector(".dataTables_length").style.display = "none";
  document.querySelector(".dataTables_info").style.display = "none";
});

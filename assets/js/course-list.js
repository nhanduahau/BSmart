function showMore(id) {
  var element = document.getElementById(id);
  var arrowDown = element.previousElementSibling.querySelector('.fa-arrow-down');
  var arrowUp = element.previousElementSibling.querySelector('.fa-arrow-up');

  if (window.innerWidth >= 767) {
    element.style.display = 'block';
    arrowDown.style.display = 'none';
    arrowUp.style.display = 'block';
  } else {
    if (element.style.display === '' || element.style.display === 'none') { // Fix here
      element.style.display = 'block';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'block';
    } else {
      element.style.display = 'none';
      arrowDown.style.display = 'block';
      arrowUp.style.display = 'none';
    }
  }
}

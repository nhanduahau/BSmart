function showMore(id) {
    var element = document.getElementById(id);
    var arrowDown = element.previousElementSibling.querySelector('.fa-arrow-down');
    var arrowUp = element.previousElementSibling.querySelector('.fa-arrow-up');
    
    if (element.style.display === 'none') {
      element.style.display = 'block';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'block';
    } else {
      element.style.display = 'none';
      arrowDown.style.display = 'block';
      arrowUp.style.display = 'none';
    }
  }
  
const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
  cell.addEventListener('click', function myFunction() {
    document.getElementById('quiz').style.display = "block";
  });
});










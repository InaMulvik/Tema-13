/* function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  } */

let overlayButtons = document.querySelectorAll('.overlay-trigger');

overlayButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    let target = btn.dataset.target;
    console.log('target', target);
    let overlay = document.getElementById(target);
    overlay.classList.toggle('open');
  });
});
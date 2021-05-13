let overlayButtons = document.querySelectorAll('.overlay-trigger');

overlayButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    let target = btn.dataset.target;
    console.log('target', target);
    let overlay = document.getElementById(target);
    overlay.classList.toggle('open');
  });
});
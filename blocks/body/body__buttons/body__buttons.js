const buttonOverlayRoot = document.querySelector('.body');
const overlay = document.querySelector('.body__overlay');
const form = document.querySelector('.body__form');

buttonOverlayRoot.addEventListener('click', (event) => {
  const buttonOverlayShow = event.target.closest('.button__overlay_show');
  const buttonOverlayHide = event.target.closest('.button__overlay_hide');

  if (buttonOverlayShow && window.getComputedStyle(overlay).visibility === 'hidden') {
    overlay.style.opacity = 0.5;
    overlay.style.visibility = 'visible';
    form.style.opacity = 1;
    form.style.visibility = 'visible';
  }

  if (buttonOverlayHide && window.getComputedStyle(overlay).visibility === 'visible') {
    overlay.style.opacity = 0;
    form.style.opacity = 0;

    setTimeout(() => {
      overlay.style.visibility = 'hidden';
      form.style.visibility = 'hidden';
    },300)
  }
})



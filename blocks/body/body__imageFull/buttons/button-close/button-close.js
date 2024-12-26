const buttonImageClose = document.querySelector('.body__imageFull__buttons__button-close');
const imageFull = document.querySelector('.body__imageFull');

buttonImageClose.addEventListener('click', () => {
    imageFull.style.opacity = 0;

    setTimeout(() => {
      imageFull.style.visibility = 'hidden';
    },300)
})



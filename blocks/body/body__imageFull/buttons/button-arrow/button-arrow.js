const buttonsParent = document.querySelector('.body__overlay');

buttonsParent.addEventListener('click', (event) => {
  const buttonRight = event.target.closest('.button__right');
  const buttonLeft = event.target.closest('.button__left');

  if (buttonRight) {
    if (currentImageIndex <= 0) return;
    currentImageIndex -= 1;
    imageFullScreenImage.src = cards[currentImageIndex].image;
    imageFullScreenTitle.textContent = cards[currentImageIndex].name;
  } else if (buttonLeft) {
    if (currentImageIndex >= (cards.length) - 1) return;
    currentImageIndex += 1;
    imageFullScreenImage.src = cards[currentImageIndex].image;
    imageFullScreenTitle.textContent = cards[currentImageIndex].name;
  }
})
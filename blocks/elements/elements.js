const elementRoot = document.querySelector('.elements');
const bodyOverlay = document.querySelector('.body__overlay');
const imageFullScreen = document.querySelector('.body__imageFull');
const imageFullScreenImage = document.querySelector('.body__imageFull__image');
const imageFullScreenTitle= document.querySelector('.body__imageFull__title');
const imageFullScreenButtonClose = document.querySelector('.body__imageFull__buttons__button-close');
let currentImageIndex;

const startImages = [];
startImages.push('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
startImages.push('https://images.unsplash.com/photo-1731453171628-635e49577b59?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
startImages.push('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
startImages.push('https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
startImages.push('https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
startImages.push('https://images.unsplash.com/photo-1520716497194-0bde97ce9abe?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

const startImagesText = [];
startImagesText.push('Луг с цветами');
startImagesText.push('Побережье с песком');
startImagesText.push('Лес в тумане');
startImagesText.push('Озеро в горах');
startImagesText.push('Гавайский лес');
startImagesText.push('Еловая тайга');

const cards = [];

for (let i = 0; i < 6; i++) {
  cards.push({
    name: startImagesText[i],
    image: startImages[i]
  })

  const addCard = document.createElement('div');
  addCard.classList.add('elements__element');
  addCard.dataset.index = i;

  const addBottom = document.createElement('div');
  addBottom.classList.add('elements__element__bottom');

  const addTitle = document.createElement('h2');
  addTitle.classList.add('element__title');
  addTitle.textContent = startImagesText[i];

  const addLikeButton = document.createElement('img');
  addLikeButton.classList.add('elements__element__like-button');
  addLikeButton.src = 'images/like.svg';
  addLikeButton.alt = 'Нравится';

  const addImage = document.createElement('img');
  addImage.classList.add('elements__element__image');
  addImage.src = startImages[i];
  addImage.alt = startImagesText[i];

  const addDeleteButton = document.createElement('img');
  addDeleteButton.classList.add('elements__element__delete');
  addDeleteButton.src = 'images/delete.png';
  addDeleteButton.style.top = '10px';
  addDeleteButton.style.right = '10px';

  addCard.appendChild(addDeleteButton);
  addCard.appendChild(addImage);
  addCard.appendChild(addBottom);

  addBottom.appendChild(addTitle);
  addBottom.appendChild(addLikeButton);

  elementRoot.insertBefore(addCard, elementRoot.firstChild);
}

elementRoot.addEventListener('click', (event) => {
  const pickedCard = event.target.closest('.elements__element');
  const buttonLike = event.target.closest('.elements__element__like-button');
  const buttonShowImage = event.target.closest('.elements__element__image');
  const buttonDeleteCard = event.target.closest('.elements__element__delete');

  if (buttonLike) {
    if (buttonLike.src.endsWith("images/like.svg")) {
      buttonLike.src = "images/likeBlack.svg";
    } else {
      buttonLike.src = "images/like.svg";
    }
  }

  if (buttonShowImage) {
    currentImageIndex = parseInt(pickedCard.dataset.index, 10);
    imageFullScreenImage.src = cards[currentImageIndex].image;
    imageFullScreenTitle.textContent = cards[currentImageIndex].name;

    imageFullScreenImage.onload = function() {
      bodyOverlay.style.opacity = 1;
      bodyOverlay.style.visibility = "visible";
      imageFullScreen.style.opacity = 1;
      imageFullScreen.style.visibility = "visible";
      imageFullScreenTitle.style.left = `${imageFullScreenImage.offsetLeft}px`;
      imageFullScreenTitle.style.top = `${imageFullScreenImage.offsetTop+imageFullScreenImage.getBoundingClientRect().height}px`;
      imageFullScreenButtonClose.style.top = `${imageFullScreenImage.offsetTop-40}px`;

      if (imageFullScreenButtonClose.width <= 20) {
        imageFullScreenButtonClose.style.left = `${imageFullScreenImage.offsetLeft+imageFullScreenImage.getBoundingClientRect().width-imageFullScreenButtonClose.width}px`;
      } else {
        imageFullScreenButtonClose.style.left = `${imageFullScreenImage.offsetLeft+imageFullScreenImage.getBoundingClientRect().width}px`;
      }
    }
  }

  if (pickedCard && buttonDeleteCard) {
    cards.splice(pickedCard.dataset.index, 1);
    pickedCard.remove();

    const remainingCards = document.querySelectorAll('.elements__element');
    remainingCards.forEach((card, newIndex) => {
      card.dataset.index = remainingCards.length - 1 - newIndex;
    })
  } 
})




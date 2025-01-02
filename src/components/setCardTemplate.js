const setCardTemplate = () => {
  const elementRoot = document.querySelector('.elements');
  const modalWindow = document.querySelector('.body__modal');
  const form = document.querySelector('.body__form');
  const imageFullScreen = document.querySelector('.body__imageFull');
  const imageFullScreenImage = document.querySelector('.body__imageFull__image');
  const imageFullScreenTitle = document.querySelector('.body__imageFull__title');

  const cardsArr = [
    {
      cardImg: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      cardTitle: 'Луг с цветами',
    },
    {
      cardImg: 'https://images.unsplash.com/photo-1731453171628-635e49577b59?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      cardTitle: 'Побережье с песком',
    },
    {
      cardImg: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      cardTitle: 'Лес в тумане',
    },
    {
      cardImg: 'https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      cardTitle: 'Озеро в горах',
    },
    {
      cardImg: 'https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      cardTitle: 'Гавайский лес',
    },
    {
      cardImg: 'https://images.unsplash.com/photo-1520716497194-0bde97ce9abe?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      cardTitle: 'Еловая тайга',
    },
  ];

  for (let i = 0; i < cardsArr.length; i++) {
    const addCard = document.createElement('div');
    addCard.classList.add('elements__element');
    addCard.dataset.index = i;
    addCard.id = "AA";

    const addBottom = document.createElement('div');
    addBottom.classList.add('elements__element__bottom');

    const addTitle = document.createElement('h2');
    addTitle.classList.add('element__title');
    addTitle.textContent = cardsArr[i].cardTitle;

    const addLikeButton = document.createElement('img');
    addLikeButton.classList.add('elements__element__like-button');
    addLikeButton.src = 'src/images/like.svg';
    addLikeButton.alt = 'Нравится';

    const addImage = document.createElement('img');
    addImage.classList.add('elements__element__image');
    addImage.src = cardsArr[i].cardImg;
    addImage.alt = cardsArr[i].cardTitle;

    const addDeleteButton = document.createElement('img');
    addDeleteButton.classList.add('elements__element__delete');
    addDeleteButton.src = 'src/images/delete.png';
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
    const pickedCardImg = event.target.closest('.elements__element__image');
    const buttonLike = event.target.closest('.elements__element__like-button');
    const buttonDeleteCard = event.target.closest('.elements__element__delete');

    if (buttonLike) {
      if (buttonLike.src.endsWith("src/images/like.svg")) {
        buttonLike.src = "src/images/likeBlack.svg";
      } else {
        buttonLike.src = "src/images/like.svg";
      }
    }

    if (pickedCard && buttonDeleteCard) {
      cardsArr.splice(pickedCard.dataset.index, 1);
      pickedCard.remove();

      const remainingCards = document.querySelectorAll('.elements__element');
      remainingCards.forEach((card, newIndex) => {
        card.dataset.index = remainingCards.length - 1 - newIndex;
      })
    }
  })

  const cardImages = document.querySelectorAll('.elements__element__image');

  cardImages.forEach((img) => {
    img.onclick = () => {
      modalWindow.classList.add('body__modal_visible');
      form.style.display = 'none';
      imageFullScreen.style.display = 'grid';
      imageFullScreenImage.src = img.src;
      imageFullScreenTitle.textContent = img.alt;
    }
  })
}

setCardTemplate();

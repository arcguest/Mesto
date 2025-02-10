import { removeCard } from "./removeCards";
import { updateCardImageOnclick, updateLikeBtnOnclick } from "./manageCards";
import { cards } from "./variables";
import deleteCardButton from '../images/delete.png';
import likeCardButton from '../images/like.svg';

export function setCardTemplate() {
  cards.fullList = [
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

  for (let i = 0; i < cards.fullList.length; i++) {
    const addCard = document.createElement('div');
    addCard.classList.add('elements__element');
    addCard.id = `cardId-${cards.elementRoot.children.length}`;

    const addBottom = document.createElement('div');
    addBottom.classList.add('elements__element__bottom');

    const addTitle = document.createElement('h2');
    addTitle.classList.add('element__title');
    addTitle.textContent = cards.fullList[i].cardTitle;
    addTitle.id = `txt-${cards.elementRoot.children.length}`;

    const addLikeButton = document.createElement('img');
    addLikeButton.classList.add('elements__element__like-button');
    addLikeButton.src = likeCardButton;
    addLikeButton.alt = 'Нравится';
    addLikeButton.id = `likeBtn-${cards.elementRoot.children.length}`;

    const addImage = document.createElement('img');
    addImage.classList.add('elements__element__image');
    addImage.src = cards.fullList[i].cardImg;
    addImage.alt = cards.fullList[i].cardTitle;
    addImage.id = `img-${cards.elementRoot.children.length}`;

    const addDeleteButton = document.createElement('img');
    addDeleteButton.classList.add('elements__element__delete');
    addDeleteButton.src = deleteCardButton;
    addDeleteButton.style.top = '10px';
    addDeleteButton.style.right = '10px';
    addDeleteButton.id = `rmvBtn-${cards.elementRoot.children.length}`;

    addCard.appendChild(addDeleteButton);
    addCard.appendChild(addImage);
    addCard.appendChild(addBottom);

    addBottom.appendChild(addTitle);
    addBottom.appendChild(addLikeButton);

    cards.elementRoot.insertBefore(addCard, cards.elementRoot.firstChild);
  }

  // cards.pickedCard = document.querySelectorAll('.elements__element');
  // cards.cardImages = document.querySelectorAll('.elements__element__image');
  // cards.likeBtnArray = document.querySelectorAll('.elements__element__like-button');
  // cards.removeCardBtnArray = document.querySelectorAll('.elements__element__delete');

  updateLikeBtnOnclick();
  updateCardImageOnclick();
  removeCard();
}



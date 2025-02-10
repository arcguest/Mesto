import { hideScrollingBar, preventScrollingWheel, preventScrollingArrow } from "./manageScrolling";
import { cards, modalWindow, imageFullScreen, imageFullScreenImage, imageFullScreenTitle } from "./variables";
import btnLikeBlack from '../images/likeBlack.svg';
import btnLike from '../images/like.svg';

export function updateLikeBtnOnclick() {
    cards.likeBtnArray = document.querySelectorAll('.elements__element__like-button');

    cards.likeBtnArray.forEach(btn => {
        btn.onclick = () => {
            if (!btn.liked) {
                btn.liked = true;
                btn.src = btnLikeBlack;
            } else {
                btn.liked = false;
                btn.src = btnLike;
            }
        }
    });
}

export function updateCardImageOnclick() {
    cards.cardImages = document.querySelectorAll('.elements__element__image');
    cards.pickedCard = document.querySelectorAll('.elements__element');

    cards.cardImages.forEach((img) => {
        img.onclick = () => {
            cards.pickedCardId = parseInt(img.id.split(`-`)[1], 10);
            modalWindow.classList.add('body__modal_visible');
            imageFullScreen.classList.remove('body__imageFull_disabled')
            imageFullScreenImage.src = img.src;
            imageFullScreenTitle.textContent = img.alt;
            window.addEventListener('wheel', preventScrollingWheel, { passive: false });
            window.addEventListener('keydown', preventScrollingArrow, { passive: false });
            window.addEventListener('wheel', preventScrollingArrow, { passive: false });
            hideScrollingBar();
        }
    })
}


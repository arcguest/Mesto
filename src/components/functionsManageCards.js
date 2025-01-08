function updateLikeBtnOnclickFunc() {
    likeBtnArray = document.querySelectorAll('.elements__element__like-button');
    likeBtnArray.forEach(btn => {
        btn.onclick = () => {
            if (btn.src.endsWith("like.svg")) {
                btn.src = "src/images/likeBlack.svg";
            } else {
                btn.src = "src/images/like.svg";
            }
        }
    });
}

function updateCardImageOnclickFunc() {
    cardImages = document.querySelectorAll('.elements__element__image');

    cardImages.forEach((img) => {
        img.onclick = () => {
            pickedCardId = parseInt(img.id.split(`-`)[1], 10);
            modalWindow.classList.add('body__modal_visible');
            imageFullScreen.classList.remove('body__imageFull_disabled')
            imageFullScreenImage.src = img.src;
            imageFullScreenTitle.textContent = img.alt;
            window.addEventListener('wheel', preventScrollingWheelFunc, { passive: false });
            window.addEventListener('keydown', preventScrollingArrowFunc, { passive: false });
            window.addEventListener('wheel', preventScrollingArrowFunc, { passive: false });
            hideScrollingBarFunc();         
        }
    })
}


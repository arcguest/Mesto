function preventScrollingWheelFunc(e) {
    e.preventDefault();
}

function preventScrollingArrowFunc(e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
    }
}

function activateScrolling(e) {
    window.removeEventListener('wheel', preventScrollingWheelFunc, { passive: false });
    window.removeEventListener('keydown', preventScrollingArrowFunc, { passive: false });
}

function updateCardOnclickFunc() {
    pickedCardArray = document.querySelectorAll('.elements__element');

    pickedCardArray.forEach(card => {
        card.onclick = () => {
        }
    });
};

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
        }
    })
}

function openFormFunc() {
    modalWindow.classList.add('body__modal_visible');
    form.classList.remove('body__form_disabled');
    imageFullScreen.classList.add('body__imageFull_disabled');
    buttonSubmit.classList.add('body__form__button_disabled');
    confirmBtnCardRmv.classList.add('body__confirmation_card-removing_disabled');
    window.addEventListener('wheel', preventScrollingWheelFunc, { passive: false });
    window.addEventListener('keydown', preventScrollingArrowFunc, { passive: false });
}

function removeCardFunc() {
    removeCardBtnArray = document.querySelectorAll('.elements__element__delete');

    removeCardBtnArray.forEach(btn => {
        btn.onclick = () => {    
            pickedCardId = btn.id.split(`-`)[1];     
            modalWindow.classList.add('body__modal_visible');
            form.classList.add('body__form_disabled');
            imageFullScreen.classList.add('body__imageFull_disabled');
            buttonSubmit.classList.add('body__form__button_disabled');
            confirmBtnCardRmv.classList.remove('body__confirmation_card-removing_disabled');
        }
    });
}

function removeCardConfirmed() {
    const pickedCard = document.querySelector(`#cardId-${pickedCardId}`);
    pickedCard.remove();
    cardsArr.splice(pickedCardId,1);
}

function hideModalFunc() {
    modalWindow.classList.remove('body__modal_visible');
    form.classList.add('body__form_disabled');
    imageFullScreen.classList.add('body__imageFull_disabled');
    buttonSubmit.classList.add('body__form__button_disabled');
    confirmBtnCardRmv.classList.add('body__confirmation_card-removing_disabled');
    activateScrolling();
}

function switchImagesByKeyFunc(e) {
    let nextIndex;
    if (e.key === 'ArrowLeft') {
        if (cardsArr.length <= pickedCardId+1) {
            nextIndex = 0;
            pickedCardId = 0;
        } else {
            nextIndex = pickedCardId+1;
            pickedCardId += 1;
        }
        imageFullScreenImage.src = `${cardsArr[nextIndex].cardImg}`;
        imageFullScreenTitle.textContent = cardsArr[nextIndex].cardTitle;
    } else if (e.key === 'ArrowRight') {
        if (pickedCardId <= 0) {
            nextIndex = cardsArr.length-1;
            pickedCardId = cardsArr.length-1;
        } else {
            nextIndex = pickedCardId-1;
            pickedCardId -= 1;
        }
        imageFullScreenImage.src = `${cardsArr[nextIndex].cardImg}`;
        imageFullScreenTitle.textContent = cardsArr[nextIndex].cardTitle;
    }
}

function switchImagesBySwipeFunc(e) {
    let touchStart = e.changedTouches[0].screenX;
    let touchEnd = e.changedTouches[0].screenX;
    const threshold = 25;

    let deltaX = touchEnd - touchStart;

    if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
            if (pickedCardId <= 0) {
                nextIndex = cardsArr.length-1;
                pickedCardId = cardsArr.length-1;
            } else {
                nextIndex = pickedCardId-1;
                pickedCardId -= 1;
            }
            imageFullScreenImage.src = `${cardsArr[nextIndex].cardImg}`;
            imageFullScreenTitle.textContent = cardsArr[nextIndex].cardTitle;
        } else {
            if (cardsArr.length <= pickedCardId+1) {
                nextIndex = 0;
                pickedCardId = 0;
            } else {
                nextIndex = pickedCardId+1;
                pickedCardId += 1;
            }
            imageFullScreenImage.src = `${cardsArr[nextIndex].cardImg}`;
            imageFullScreenTitle.textContent = cardsArr[nextIndex].cardTitle;
        }
    }
}


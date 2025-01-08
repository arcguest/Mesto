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
    cardsArr.splice(pickedCardId, 1);
}


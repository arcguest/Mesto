import { cards, modalWindow, form, imageFullScreen, buttonSubmit, confirmBtnCardRmv } from "./variables";
import { preventScrollingArrow, preventScrollingWheel, hideScrollingBar } from "./manageScrolling";

export function removeCard() {
    cards.removeCardBtnArray = document.querySelectorAll('.elements__element__delete');
    
    cards.removeCardBtnArray.forEach(btn => {
        btn.onclick = () => {
            cards.pickedCardId = btn.id.split(`-`)[1];
            modalWindow.classList.add('body__modal_visible');
            form.classList.add('body__form_disabled');
            imageFullScreen.classList.add('body__imageFull_disabled');
            buttonSubmit.classList.add('body__form__button_disabled');
            confirmBtnCardRmv.classList.remove('body__confirmation_card-removing_disabled');
            window.addEventListener('wheel', preventScrollingWheel, { passive: false });
            window.addEventListener('keydown', preventScrollingArrow, { passive: false });
            hideScrollingBar();
        }
    });
}

export function removeCardConfirmed() {
    const pickedCard = document.querySelector(`#cardId-${cards.pickedCardId}`);
    pickedCard.remove();
    cards.fullList.splice(cards.pickedCardId, 1);
}


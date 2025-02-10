import { cards, modalWindow, form, imageFullScreen, buttonSubmit, confirmBtnCardRmv, formTitle, formInputImgName, formInputImgLink, formInputName, formInputProfession, btnOverlayHide, btnOverlayShow, overlayWindow, buttonSaveForm, profileTitle, profileSubtitle } from "./variables";
import { activateScrolling, preventScrollingWheel, preventScrollingArrow, hideScrollingBar } from "./manageScrolling";

export function openModal() {
    modalWindow.classList.add('body__modal_visible');
    form.classList.remove('body__form_disabled');
    imageFullScreen.classList.add('body__imageFull_disabled');
    buttonSubmit.classList.add('body__form__button_disabled');
    confirmBtnCardRmv.classList.add('body__confirmation_card-removing_disabled');
    window.addEventListener('wheel', preventScrollingWheel, { passive: false });
    window.addEventListener('keydown', preventScrollingArrow, { passive: false });
    hideScrollingBar();
}

export function hideModal() {
    modalWindow.classList.remove('body__modal_visible');
    form.classList.add('body__form_disabled');
    imageFullScreen.classList.add('body__imageFull_disabled');
    buttonSubmit.classList.add('body__form__button_disabled');
    confirmBtnCardRmv.classList.add('body__confirmation_card-removing_disabled');

    activateScrolling();

    cards.pickedCardId = 0;
    formInputImgName.classList.add('body__form__input_disabled');
    formInputImgLink.classList.add('body__form__input_disabled');
    formInputName.classList.add('body__form__input_disabled');
    formInputProfession.classList.add('body__form__input_disabled');
}

export function changeModalVisibility() {
    btnOverlayShow.forEach((btn) => {
        btn.onclick = () => {
            openModal();

            if (btn.classList.contains('profile__info_top_edit-btn-container')) {
                formTitle.textContent = "Редактировать профиль";
                formInputName.value = profileTitle.textContent;
                formInputProfession.value = profileSubtitle.textContent;
                buttonSaveForm.textContent = "Сохранить";
                formInputName.classList.remove('body__form__input_disabled');
                formInputProfession.classList.remove('body__form__input_disabled');
            } else {
                formTitle.textContent = "Новое место";
                formInputImgName.value = "";
                formInputImgLink.value = "";
                formInputImgName.placeholder = "Название";
                formInputImgLink.placeholder = "Ссылка на картинку";
                buttonSaveForm.textContent = "Добавить";
                formInputImgName.classList.remove('body__form__input_disabled');
                formInputImgLink.classList.remove('body__form__input_disabled');
            }
            hideScrollingBar();
        }
    })

    btnOverlayHide.forEach((btn) => {
        btn.onclick = (e) => {
            e.preventDefault();
            hideModal();
        }
    })

    overlayWindow.onclick = hideModal;

    document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') {
            hideModal();
        }
    })

    document.querySelector('.body__form').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && cards.btnEnterPreventDefault) {
            e.preventDefault();
        }
    })
}


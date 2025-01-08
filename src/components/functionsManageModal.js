function openModalFunc() {
    modalWindow.classList.add('body__modal_visible');
    form.classList.remove('body__form_disabled');
    imageFullScreen.classList.add('body__imageFull_disabled');
    buttonSubmit.classList.add('body__form__button_disabled');
    confirmBtnCardRmv.classList.add('body__confirmation_card-removing_disabled');
    window.addEventListener('wheel', preventScrollingWheelFunc, { passive: false });
    window.addEventListener('keydown', preventScrollingArrowFunc, { passive: false });
}

function hideModalFunc() {
    modalWindow.classList.remove('body__modal_visible');
    form.classList.add('body__form_disabled');
    imageFullScreen.classList.add('body__imageFull_disabled');
    buttonSubmit.classList.add('body__form__button_disabled');
    confirmBtnCardRmv.classList.add('body__confirmation_card-removing_disabled');
    activateScrolling();
    pickedCardId = 0;
    formInputImgName.classList.add('body__form__input_disabled');
    formInputImgLink.classList.add('body__form__input_disabled');
    formInputName.classList.add('body__form__input_disabled');
    formInputProfession.classList.add('body__form__input_disabled');
}


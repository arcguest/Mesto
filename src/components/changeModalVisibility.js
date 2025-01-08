const changeModalVisibility = () => {

  btnOverlayShow.forEach((btn) => {
    btn.onclick = () => {
      openModalFunc();

      if (btn.classList.contains('profile__info_edit-btn-container')) {
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
      hideScrollingBarFunc();
    }
  })

  btnOverlayHide.forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      hideModalFunc();
    }
  })

  overlayWindow.onclick = hideModalFunc;

  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      hideModalFunc();
    }
  })

  document.querySelector('.body__form').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && btnEnterPreventDefault) {
      e.preventDefault();
    }
  })
}

changeModalVisibility();






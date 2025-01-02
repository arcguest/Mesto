const changeModalVisibility = () => {
  const btnOverlayShow = document.querySelectorAll('.button__overlay_show');
  const btnOverlayHide = document.querySelectorAll('.button__overlay_hide');
  const modalWindow = document.querySelector('.body__modal');
  const overlayWindow = document.querySelector('.body__overlay');
  const form = document.querySelector('.body__form');
  const imageFullScreen = document.querySelector('.body__imageFull');

  const profileTitle = document.querySelector('.body__form__header');
  const buttonSubmit = document.querySelector('.body__form__button');

  const buttonSaveForm = document.querySelector('.body__form__button');
  const titleText = document.querySelector('.profile__info_inputs_title');
  const subtitleText = document.querySelector('.profile__info_inputs_subtitle');
  const textName = document.querySelector('input[name="name"]');
  const textLink = document.querySelector('input[name="profession"]');

  const hideModalFunc = () => {
    modalWindow.classList.remove('body__modal_visible');
  };

  btnOverlayShow.forEach((btn) => {
    btn.onclick = () => {
      modalWindow.classList.add('body__modal_visible');
      imageFullScreen.style.display = 'none';
      form.style.display = 'flex';
      buttonSubmit.classList.add('body__form__button_disabled');

      if (btn.classList.contains('profile__info_edit-btn-container')) {
        profileTitle.textContent = "Редактировать профиль";
        textName.value = titleText.textContent;
        textLink.value = subtitleText.textContent;
        buttonSaveForm.textContent = "Сохранить";
      } else {
        profileTitle.textContent = "Новое место";
        textName.value = "";
        textLink.value = "";
        textName.placeholder = "Название";
        textLink.placeholder = "Ссылка на картинку";
        buttonSaveForm.textContent = "Добавить";
      }

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
}

changeModalVisibility();






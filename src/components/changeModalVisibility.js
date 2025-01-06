const changeModalVisibility = () => {

  btnOverlayShow.forEach((btn) => {
    btn.onclick = () => {
      openFormFunc();

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






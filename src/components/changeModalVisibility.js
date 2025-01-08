const changeModalVisibility = () => {

  btnOverlayShow.forEach((btn) => {
    btn.onclick = () => {
      openModalFunc();

      if (btn.classList.contains('profile__info_edit-btn-container')) {
        formTitle.textContent = "Редактировать профиль";
        formInputFirst.value = profileTitle.textContent;
        formInputSecond.value = profileSubtitle.textContent;
        buttonSaveForm.textContent = "Сохранить";
      } else {
        formTitle.textContent = "Новое место";
        formInputFirst.value = "";
        formInputSecond.value = "";
        formInputFirst.placeholder = "Название";
        formInputSecond.placeholder = "Ссылка на картинку";
        buttonSaveForm.textContent = "Добавить";
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
}

changeModalVisibility();






const buttonEdit = document.querySelector('.profile__edit-button');
const buttonSaveForm = document.querySelector('.body__form__button');

buttonEdit.addEventListener('click', () => {
  profileTitle.textContent = "Редактировать профиль";
  textName.value = "";
  textLink.value = "";
  textName.placeholder = "Жак-Ив-Кусто";
  textLink.placeholder = "Исследователь океана";
  buttonSaveForm.textContent = "Сохранить";
});
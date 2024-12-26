const buttonAdd = document.querySelector('.profile__button');
const profileTitle = document.querySelector('.body__form__header');
const textName = document.querySelector('input[name="name"]');
const textLink = document.querySelector('input[name="profession"]');
const button = document.querySelector('.body__form__button')

buttonAdd.addEventListener('click', () => {
  profileTitle.textContent = "Новое место";
  textName.value = "";
  textLink.value = "";
  textName.placeholder = "Название";
  textLink.placeholder = "Ссылка на картинку";
  button.textContent = "Добавить";
});
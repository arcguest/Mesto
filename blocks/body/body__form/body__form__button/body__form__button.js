const buttonSubmit = document.querySelector('.body__form__button');

buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault();

  const textName = document.querySelector('input[name="name"]').value;
  const textProfession = document.querySelector('input[name="profession"]').value;

  if (buttonSaveForm.textContent === "Сохранить") {
    if (textName) {
      const profileName = document.querySelector('.profile__title');
      const profileProfession = document.querySelector('.profile__subtitle');

      if (profileName) {
        profileName.textContent = textName;
      };

      if (profileProfession) {
        profileProfession.textContent = textProfession;
      };
    };
  } else {
    if (!textProfession) return;

    const parentElements = document.querySelector('.elements');
    const newElement = document.createElement('div');
    const newElementImg = document.createElement('img');
    const newElementChildDiv = document.createElement('div');
    const newElementTitle = document.createElement('h2');
    const newElementLike = document.createElement('img');

    newElement.classList.add('elements__element');
    newElement.appendChild(newElementImg);
    newElement.appendChild(newElementChildDiv);

    newElementChildDiv.appendChild(newElementTitle);
    newElementChildDiv.appendChild(newElementLike);

    newElementImg.alt = textName;
    newElementImg.src = textProfession;
    newElementImg.classList.add('elements__element__image');

    newElementImg.onerror = function () {
      newElementImg.src = "images/elbrus.jpg";
    }

    newElementTitle.classList.add('element__title');
    newElementTitle.textContent = textName || "Фото";

    newElementLike.classList.add('elements__element__like-button');
    newElementLike.src = "images/like.svg";
    newElementLike.alt = "Нравится";

    newElementChildDiv.classList.add('elements__element__bottom');

    parentElements.insertBefore(newElement, parentElements.firstChild);
  }

});

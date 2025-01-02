const saveFormData = () => {
  const buttonSubmit = document.querySelector('.body__form__button');
  const formInputs = document.querySelectorAll('.body__form__input');
  const modalWindow = document.querySelector('.body__modal');
  const buttonSaveForm = document.querySelector('.body__form__button');

  formInputs.forEach((input) => {
    input.oninput = () => {
      if (Array.from(formInputs).some((el) => el.value.length < 3)) return buttonSubmit.classList.add('body__form__button_disabled');

      buttonSubmit.classList.remove('body__form__button_disabled');
    }
  });

  buttonSubmit.onclick = (e) => {
    e.preventDefault();

    const textName = document.querySelector('input[name="name"]').value;
    const textProfession = document.querySelector('input[name="profession"]').value;

    if (buttonSaveForm.textContent === "Сохранить") {
      if (textName) {
        const profileName = document.querySelector('.profile__info_inputs_title');
        const profileProfession = document.querySelector('.profile__info_inputs_subtitle');

        if (profileName) {
          profileName.textContent = textName;
        };

        if (profileProfession) {
          profileProfession.textContent = textProfession;
        };
      };
    } else {
      const parentElements = document.querySelector('.elements');
      const newElement = document.createElement('div');
      const newElementImg = document.createElement('img');
      const newElementChildDiv = document.createElement('div');
      const newElementTitle = document.createElement('h2');
      const newElementLike = document.createElement('img');
      const newDeleteButton = document.createElement('img');

      newDeleteButton.classList.add('elements__element__delete');
      newDeleteButton.src = 'src/images/delete.png';
      newDeleteButton.style.top = '10px';
      newDeleteButton.style.right = '10px';

      newElement.classList.add('elements__element');
      newElement.appendChild(newElementImg);
      newElement.appendChild(newElementChildDiv);
      newElement.appendChild(newDeleteButton);

      newElementChildDiv.appendChild(newElementTitle);
      newElementChildDiv.appendChild(newElementLike);

      newElementImg.alt = textName;
      newElementImg.src = textProfession;
      newElementImg.classList.add('elements__element__image');

      newElementImg.onerror = function () {
        newElementImg.src = "https://images.unsplash.com/photo-1731453171628-635e49577b59?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      }

      newElementTitle.classList.add('element__title');
      newElementTitle.textContent = textName || "Фото";

      newElementLike.classList.add('elements__element__like-button');
      newElementLike.src = "src/images/like.svg";
      newElementLike.alt = "Нравится";

      newElementChildDiv.classList.add('elements__element__bottom');

      parentElements.insertBefore(newElement, parentElements.firstChild);
    }
    modalWindow.classList.remove('body__modal_visible');
  };
}

saveFormData();





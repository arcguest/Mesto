const saveFormData = () => {
  formInputs.forEach((input) => {
    input.oninput = () => {
      if (Array.from(formInputs).some((el) => el.value.length < 2)) return buttonSubmit.classList.add('body__form__button_disabled');

      buttonSubmit.classList.remove('body__form__button_disabled');
    }
  });

  buttonSubmit.onclick = (e) => {
    e.preventDefault();

    if (buttonSaveForm.textContent === "Сохранить") {
      if (formInputFirst) {

        if (profileTitle) {
          profileTitle.textContent = formInputFirst.value;
        };

        if (profileSubtitle) {
          profileSubtitle.textContent = formInputSecond.value;
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

      newElement.classList.add('elements__element');
      newElement.id = `cardId-${elementRoot.children.length}`;
      newElement.appendChild(newElementImg);
      newElement.appendChild(newElementChildDiv);
      newElement.appendChild(newDeleteButton);

      newDeleteButton.classList.add('elements__element__delete');
      newDeleteButton.src = 'src/images/delete.png';
      newDeleteButton.style.top = '10px';
      newDeleteButton.style.right = '10px';
      newDeleteButton.id = `rmvBtn-${elementRoot.children.length}`;

      newElementChildDiv.appendChild(newElementTitle);
      newElementChildDiv.appendChild(newElementLike);

      newElementImg.alt = formInputFirst.value;
      newElementImg.src = formInputSecond.value;
      newElementImg.classList.add('elements__element__image');
      newElementImg.id = `img-${elementRoot.children.length}`;

      newElementImg.onerror = function () {
        newElementImg.src = "https://images.unsplash.com/photo-1731453171628-635e49577b59?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      }

      newElementTitle.classList.add('element__title');
      newElementTitle.textContent = formInputFirst.value || "Фото";
      newElementTitle.id = `txt-${elementRoot.children.length}`;

      newElementLike.classList.add('elements__element__like-button');
      newElementLike.src = "src/images/like.svg";
      newElementLike.alt = "Нравится";
      newElementLike.id = `likeBtn-${elementRoot.children.length}`;

      newElementChildDiv.classList.add('elements__element__bottom');

      parentElements.insertBefore(newElement, parentElements.firstChild);
      cardsArr.push({
        cardImg: newElementImg.src,
        cardTitle: newElementImg.alt
      })

      updateLikeBtnOnclickFunc();
      updateCardImageOnclickFunc();
      removeCardFunc();
    }
    hideModalFunc();
  };
}

saveFormData();





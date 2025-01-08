const saveFormData = () => {
  const formInputsArray = Array.from(formInputs);
  const regexpPattern = new RegExp('^[a-zA-Zа-яА-Я\-_ ]+$')
  const regexpPatternLink = new RegExp('^[a-zA-Zа-яА-Я0-9\-_ /.:]+$')
  let btnReady = true;

  formInputs.forEach((input) => {
    input.oninput = (e) => {
      btnEnterPreventDefault = true;
      const inputLengthCheck = formInputsArray.some((el) => el.value.length < 2 && !el.classList.contains('body__form__input_disabled'));

      if (input.classList.contains('body__form__input_name') || input.classList.contains('body__form__input_profession') || input.classList.contains('body__form__input_img-name')) {
        if (!regexpPattern.test(input.value)) {
          input.classList.add('input__error');
          btnReady = false;
        } else {
          input.classList.remove('input__error');
          btnReady = true;
        }
      }

      if (input.classList.contains('body__form__input_img-link')) {
        const inputLinkCheck = regexpPatternLink.test(input.value);
        const inputValue = input.value.trim();
        if (!inputLinkCheck) return;

        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg'];

        try {
          const url = new URL(inputValue);
          btnReady = true;
          input.classList.remove('input__error');
          const isImageLink = imageExtensions.some(ext => url.pathname.toLowerCase().endsWith(ext));

          if (isImageLink) {
            btnReady = true;
          } else {
            btnReady = false;
          }
          
        } catch (_) {
          btnReady = false;
          input.classList.add('input__error');
        }
      }

      if (inputLengthCheck || !btnReady) {
        buttonSubmit.classList.add('body__form__button_disabled');
        return
      }
      btnEnterPreventDefault = false;
      buttonSubmit.classList.remove('body__form__button_disabled');
    }
  });

  buttonSubmit.onclick = (e) => {
    e.preventDefault();

    if (buttonSaveForm.textContent === "Сохранить") {
      if (formInputName) {

        if (profileTitle) {
          profileTitle.textContent = formInputName.value;
        };

        if (profileSubtitle) {
          profileSubtitle.textContent = formInputProfession.value;
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

      newElementImg.alt = formInputImgName.value;
      newElementImg.src = formInputImgLink.value;
      newElementImg.classList.add('elements__element__image');
      newElementImg.id = `img-${elementRoot.children.length}`;

      newElementImg.onerror = function () {
        newElementImg.src = "https://images.unsplash.com/photo-1731453171628-635e49577b59?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      }

      newElementTitle.classList.add('element__title');
      newElementTitle.textContent = formInputImgName.value || "Фото";
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





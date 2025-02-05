const saveFormData = () => {
  const formInputsArray = Array.from(formInputs);
  const regexpPattern = new RegExp('^[a-zA-Zа-яА-Я\-_ /.:]+$');
  const regexpPatternLink = new RegExp('^[a-zA-Zа-яА-Я0-9\-_ /.:]+$')
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg'];
  let btnReady = true;
  let matchTextPattern = false;
  let isUrl = true;
  const profileFormInputs = [];
  const cardFormInputs = [];


  formInputsArray.forEach((input) => {
    if (input.classList.contains('body__form__input_profile')) {
      profileFormInputs.push(input);
    } else if (input.classList.contains('body__form__input_card')) {
      cardFormInputs.push(input);
    }

    input.onfocus = () => {
      if (!input.classList.contains('input__error')) {
        input.classList.add('input__focus');
      }
    }

    input.onblur = () => {
      if (!input.classList.contains('input__error')) {
        input.classList.remove('input__focus');
      }
    }

    input.oninput = () => {
      if (input.classList.contains('body__form__input_profile')) {
        matchTextPattern = profileFormInputs.every(el => regexpPattern.test(el.value));
      } else if (input.classList.contains('body__form__input_card')) {
        matchTextPattern = cardFormInputs.every(el => regexpPattern.test(el.value));

        if (input.classList.contains('body__form__input_img-link')) {
          const inputValue = input.value.trim();
          isUrl = inputValue.startsWith('http') && inputValue.includes('://');
        }
      }

      if (!regexpPattern.test(input.value)) {
        input.classList.add('input__error');
      } else {
        input.classList.remove('input__error');
      }

      if (!matchTextPattern || !isUrl) {      
        btnReady = false;
      } else {
        btnReady = true;
      }

      btnEnterPreventDefault = true;
      const inputLengthCheck = formInputsArray.some((el) => el.value.length < 2 && !el.classList.contains('body__form__input_disabled'));

      if (inputLengthCheck || !btnReady) {
        buttonSubmit.classList.add('body__form__button_disabled');
        return
      }

      btnEnterPreventDefault = false;
      buttonSubmit.classList.remove('body__form__button_disabled');
    }
  });

  //   const isImageLink = formInputsArray.some((el) => {
  //     return !el.classList.contains('body__form__input_disabled') && el.classList.contains('body__form__input_img-link') && imageExtensions.some(ext => el.value.toLowerCase().endsWith(ext));
  // })



  // if (input.classList.contains('body__form__input_img-link')) {
  //   const inputLinkCheck = regexpPatternLink.test(input.value);
  //   const inputValue = input.value.trim();
  //   if (!inputLinkCheck) return;
  //   btnReady = true;
  //   try {
  //     const url = new URL(inputValue);
  //     btnReady = true;
  //     input.classList.remove('input__error');
  //   } catch (err) {
  //     btnReady = false;
  //     input.classList.add('input__error');
  //   }
  // }








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

      newElementImg.onerror = () => {
        newElementImg.src = "https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg";
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





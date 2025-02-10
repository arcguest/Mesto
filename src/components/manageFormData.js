import { updateLikeBtnOnclick, updateCardImageOnclick } from "./manageCards";
import { removeCard } from "./removeCards";
import { hideModal } from "./manageModals";
import { cards, formInputs, formInputName, formInputImgLink, formInputImgName, formInputProfession, profileTitle, profileSubtitle, buttonSubmit, buttonSaveForm } from "./variables";
import deleteCardButton from '../images/delete.png';
import likeCardButton from '../images/like.svg';

export function saveFormData() {
  const formInputsArray = Array.from(formInputs);
  const regexpPattern = new RegExp('^[a-zA-Zа-яА-Я\-_ ]+$');
  let btnReady = true;
  let matchTextPattern = false;
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
      let isUrl = false;
      let testBool = false;

      if (input.classList.contains('body__form__input_profile')) {

        matchTextPattern = profileFormInputs.every(el => regexpPattern.test(el.value));

        if (!regexpPattern.test(input.value)) {
          input.classList.add('input__error');
        } else {
          input.classList.remove('input__error');
        }

      } else if (input.classList.contains('body__form__input_card')) {

        cardFormInputs.forEach(el => {
          if (el.classList.contains('body__form__input_img-link')) {
            const inputValue = el.value;
            isUrl = inputValue.startsWith('http') && inputValue.includes('://');

            if (!isUrl) {
              el.classList.add('input__error');
            } else {
              el.classList.remove('input__error');
            }
          } else {
            matchTextPattern = regexpPattern.test(el.value);

            if (!regexpPattern.test(el.value)) {
              el.classList.add('input__error');
            } else {
              el.classList.remove('input__error');
            }
          }
        });

        testBool = cardFormInputs.every(el => {
          return !el.classList.contains('input__error')
        })

      }

      if (!isUrl || (!testBool)) {
        btnReady = false;
      } else {
        btnReady = true;
      }

      console.log('testBool',testBool)
      console.log('btnReady',btnReady)

      cards.btnEnterPreventDefault = true;
      const inputLengthCheck = formInputsArray.some((el) => el.value.length < 2 && !el.classList.contains('body__form__input_disabled'));

      if (inputLengthCheck || !btnReady) {
        buttonSubmit.classList.add('body__form__button_disabled');
        return
      }

      cards.btnEnterPreventDefault = false;
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
      newElement.id = `cardId-${cards.elementRoot.children.length}`;
      newElement.appendChild(newElementImg);
      newElement.appendChild(newElementChildDiv);
      newElement.appendChild(newDeleteButton);

      newDeleteButton.classList.add('elements__element__delete');
      newDeleteButton.src = deleteCardButton;
      newDeleteButton.style.top = '10px';
      newDeleteButton.style.right = '10px';
      newDeleteButton.id = `rmvBtn-${cards.elementRoot.children.length}`;

      newElementChildDiv.appendChild(newElementTitle);
      newElementChildDiv.appendChild(newElementLike);

      newElementImg.alt = formInputImgName.value;
      newElementImg.src = formInputImgLink.value;
      newElementImg.classList.add('elements__element__image');
      newElementImg.id = `img-${cards.elementRoot.children.length}`;

      newElementImg.onerror = () => {
        newElementImg.src = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
      }

      newElementTitle.classList.add('element__title');
      newElementTitle.textContent = formInputImgName.value || "Фото";
      newElementTitle.id = `txt-${cards.elementRoot.children.length}`;

      newElementLike.classList.add('elements__element__like-button');
      newElementLike.src = likeCardButton;
      newElementLike.alt = "Нравится";
      newElementLike.id = `likeBtn-${cards.elementRoot.children.length}`;

      newElementChildDiv.classList.add('elements__element__bottom');

      parentElements.insertBefore(newElement, parentElements.firstChild);

      cards.fullList.push({
        cardImg: newElementImg.src,
        cardTitle: newElementImg.alt
      })

      cards.cardImages = document.querySelectorAll('.elements__element__image');

      updateLikeBtnOnclick();
      updateCardImageOnclick();
      removeCard();
    }
    hideModal();
  };
}






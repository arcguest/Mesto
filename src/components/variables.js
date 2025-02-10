export const bodyElement = document.querySelector('.body');

export const cards = {
    fullList: [],
    pickedCard: null,
    elementRoot: document.querySelector('.elements'),
    likeBtnArray: null,
    cardImages: null,
    pickedCardId: null,
    removeCardBtnArray: null,
    btnEnterPreventDefault: false,
};

export const modalWindow = document.querySelector('.body__modal');

export const profileTitle = document.querySelector('.profile__info_top_title');
export const profileSubtitle = document.querySelector('.profile__info_bottom_subtitle');

export const imageFullScreen = document.querySelector('.body__imageFull');
export const imageFullScreenContainer = document.querySelector('.body__imageFull_container');
export const imageFullScreenWrapper = document.querySelector('.body__imageFull__image_wrapper');
export const imageFullScreenImage = document.querySelector('.body__imageFull__image');
export const imageFullScreenTitle = document.querySelector('.body__imageFull__title');
export const imageFullArrowsArray = document.querySelectorAll('.body__imageFull__buttons__arrow');

export const buttonRight = document.querySelector('.button__right');
export const buttonLeft = document.querySelector('.button__left');

export const btnOverlayShow = document.querySelectorAll('.button__overlay_show');
export const btnOverlayHide = document.querySelectorAll('.button__overlay_hide');
export const overlayWindow = document.querySelector('.body__overlay');

export const formTitle = document.querySelector('.body__form__header');
export const formInputName = document.querySelector('input[name="name"]');
export const formInputProfession = document.querySelector('input[name="profession"]');
export const formInputImgName = document.querySelector('input[name="imgName"]');
export const formInputImgLink = document.querySelector('input[name="imgLink"]');
export const formInputs = document.querySelectorAll('.body__form__input');
export const form = document.querySelector('.body__form');

export const buttonSubmit = document.querySelector('.body__form__button');

export const buttonSaveForm = document.querySelector('.body__form__button');

export const confirmBtnCardRmv = document.querySelector('.body__confirmation_card-removing');
export const confirmBtnCardRmvBtnArray = document.querySelectorAll('.body__confirmation_card-removing_btn');

export const touchManager = {
    touchStart: null,
    touchEnd: null,
    swipeLength: 0,
}


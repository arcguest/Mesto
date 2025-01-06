const elementRoot = document.querySelector('.elements');
let cardsArr;
let pickedCardArray;
let pickedCardId;
let cardImages;
let likeBtnArray;
let removeCardBtnArray;
const modalWindow = document.querySelector('.body__modal');
const form = document.querySelector('.body__form');
const imageFullScreen = document.querySelector('.body__imageFull');
const imageFullScreenImage = document.querySelector('.body__imageFull__image');
const imageFullScreenTitle = document.querySelector('.body__imageFull__title');
const imageFullArrowsArray = document.querySelectorAll('.body__imageFull__buttons__arrow');
const btnOverlayShow = document.querySelectorAll('.button__overlay_show');
const btnOverlayHide = document.querySelectorAll('.button__overlay_hide');
const overlayWindow = document.querySelector('.body__overlay');

const profileTitle = document.querySelector('.body__form__header');
const buttonSubmit = document.querySelector('.body__form__button');

const buttonSaveForm = document.querySelector('.body__form__button');
const titleText = document.querySelector('.profile__info_inputs_title');
const subtitleText = document.querySelector('.profile__info_inputs_subtitle');
const textName = document.querySelector('input[name="name"]');
const textLink = document.querySelector('input[name="profession"]');

const confirmBtnCardRmv = document.querySelector('.body__confirmation_card-removing'); 
const confirmBtnCardRmvBtnArray = document.querySelectorAll('.body__confirmation_card-removing_btn');
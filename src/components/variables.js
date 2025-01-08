const bodyElement = document.querySelector('.body');
const elementRoot = document.querySelector('.elements');
let cardsArr;
let pickedCardArray;
let pickedCardId;
let cardImages;
let likeBtnArray;
let removeCardBtnArray;
let btnEnterPreventDefault = true;

const modalWindow = document.querySelector('.body__modal');

const profileTitle = document.querySelector('.profile__info_inputs_title');
const profileSubtitle = document.querySelector('.profile__info_inputs_subtitle');

const imageFullScreen = document.querySelector('.body__imageFull');
const imageFullScreenContainer = document.querySelector('.body__imageFull_container');
const imageFullScreenWrapper = document.querySelector('.body__imageFull__image_wrapper');
const imageFullScreenImage = document.querySelector('.body__imageFull__image');
const imageFullScreenTitle = document.querySelector('.body__imageFull__title');
const buttonRight = document.querySelector('.button__right');
const buttonLeft = document.querySelector('.button__left');
const imageFullArrowsArray = document.querySelectorAll('.body__imageFull__buttons__arrow');

const btnOverlayShow = document.querySelectorAll('.button__overlay_show');
const btnOverlayHide = document.querySelectorAll('.button__overlay_hide');
const overlayWindow = document.querySelector('.body__overlay');

const formTitle = document.querySelector('.body__form__header');
const formInputName = document.querySelector('input[name="name"]');
const formInputProfession = document.querySelector('input[name="profession"]');
const formInputImgName = document.querySelector('input[name="imgName"]');
const formInputImgLink = document.querySelector('input[name="imgLink"]');
const formInputs = document.querySelectorAll('.body__form__input');
const form = document.querySelector('.body__form');


const buttonSubmit = document.querySelector('.body__form__button');

const buttonSaveForm = document.querySelector('.body__form__button');

const confirmBtnCardRmv = document.querySelector('.body__confirmation_card-removing'); 
const confirmBtnCardRmvBtnArray = document.querySelectorAll('.body__confirmation_card-removing_btn');

let touchStart;
let touchEnd;
let swipeLength = 0;
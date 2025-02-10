import logo from '../images/logo.svg';
import avatar from '../images/Avatar.png';
import editButton from '../images/editButton.svg';
import addButton from '../images/addButton.svg';
import closeButton from '../images/closeButton.svg';

export function setImages() {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('#logoMain').src = logo;
        document.querySelector('.profile__icon').src = avatar;
        document.querySelector('#btnEditProfile').src = editButton;
        document.querySelector('#btnAddProfile').src = addButton;
        document.querySelectorAll('.button__overlay_hide').forEach(btn => {
            btn.src = closeButton;
        })
    })
}


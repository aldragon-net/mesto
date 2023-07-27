import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';

import { initialCards, validationSettings } from '../utils/constants.js';
import { createCardRenderer } from '../utils/utils.js';

const photoPopup = new PopupWithImage('#photo-popup');
const cardRenderer = createCardRenderer(photoPopup.open.bind(photoPopup));

const places = new Section( { items: initialCards, renderer: cardRenderer }, '.places');
const userInfo = new UserInfo( {nameSelector: '.profile__name', jobSelector: '.profile__job'});

const profilePopup = document.querySelector('#profile-popup');
const placePopup = document.querySelector('#place-popup');

const profileForm = document.forms['profile-form'];
const profileNameInput = profileForm.querySelector('#profile-name-input');
const profileJobInput = profileForm.querySelector('#profile-job-input');
const profileFormValidator = new FormValidator(profileForm, validationSettings);
profileFormValidator.enableValidation();

const placeForm = document.forms['place-form'];
const placeNameInput = placeForm.querySelector('#place-name-input');
const placeLinkInput = placeForm.querySelector('#place-link-input');
const placeFormValidator = new FormValidator(placeForm, validationSettings);
placeFormValidator.enableValidation();


function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEsc);
}

function closePopup (popup) {
  document.removeEventListener('keydown', handleEsc);
  popup.classList.remove('popup_opened');
}

function openProfileForm () {
  const {name, job} = userInfo.getUserInfo();
  profileNameInput.value = name;
  profileJobInput.value = job;
  openPopup(profilePopup);
}

function handleEsc (evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  userInfo.setUserInfo(profileNameInput.value, profileJobInput.value);
  closePopup(profilePopup);
}

function handlePlaceFormSubmit (evt) {
  evt.preventDefault();
  const newCard = {
    name: placeNameInput.value,
    link: placeLinkInput.value
  };
  places.addItem(newCard);
  closePopup(placePopup);
  evt.target.reset()
}


const editProfileButton = document.querySelector('.profile__edit-button');
editProfileButton.addEventListener('click', openProfileForm);
profileForm.addEventListener('submit', handleProfileFormSubmit);

const addPlaceButton = document.querySelector('.profile__add-button');
addPlaceButton.addEventListener('click', () => openPopup(placePopup));
placeForm.addEventListener('submit', handlePlaceFormSubmit);

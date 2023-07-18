import Card from './Card.js';
import FormValidator from './FormValidator.js';


const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-submit',
  inactiveButtonClass: 'popup__form-submit_inactive',
  inputErrorClass: 'popup__form-input_type_error',
  errorClass: 'popup__form-error_visible'
}

const places = document.querySelector('.places');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__image-caption');

const editProfileButton = document.querySelector('.profile__edit-button');
const addPlaceButton = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close');

const profilePopup = document.querySelector('#profile-popup');
const placePopup = document.querySelector('#place-popup');
const photoPopup = document.querySelector('#photo-popup');
const popupList = [profilePopup, placePopup, photoPopup];

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

function openImage (link, caption) {
  popupImage.setAttribute('src', link);
  popupImage.setAttribute('alt', `фотография места «${caption}»`);
  popupImageCaption.textContent = caption;
  openPopup(photoPopup)
}

function openProfileForm () {
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
  openPopup(profilePopup);
}

function handleOverlayClick (evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
  if (evt.target.classList.contains('popup__container')) {
    closePopup(evt.target.closest('.popup'));
  }
}

function handleEsc (evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
  closePopup(profilePopup);
}

function handlePlaceFormSubmit (evt) {
  evt.preventDefault();
  const newCard = {
    name: placeNameInput.value,
    link: placeLinkInput.value
  };
  addCard(newCard);
  closePopup(placePopup);
  evt.target.reset()
}

function addCard (cardData) {
  const card = new Card(cardData, '#template-place', openImage);
  const cardElement = card.generateCard();
  places.prepend(cardElement);
}

function addInitialCards (initialCards) {
  initialCards.forEach(addCard);
};


editProfileButton.addEventListener('click', openProfileForm);
profileForm.addEventListener('submit', handleProfileFormSubmit);

addPlaceButton.addEventListener('click', () => openPopup(placePopup));
placeForm.addEventListener('submit', handlePlaceFormSubmit);

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});
popupList.forEach((popup) => {
  popup.addEventListener('click', handleOverlayClick)
});

addInitialCards(initialCards);

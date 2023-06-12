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

function toggleLike(evt) {
    evt.target.classList.toggle('place__like-icon_active');
}

function deleteCard(evt) {
    evt.target.closest('.place').remove();
}

function addCard (card) {
    const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
    placeElement.querySelector('.place__name').textContent = card.name;
    placeElement.querySelector('.place__image').src = card.link;
    placeElement.querySelector('.place__image').alt = `фотография места «${card.name}»`;
    placeElement.querySelector('.place__image').addEventListener('click', openImage);
    placeElement.querySelector('.place__like-icon').addEventListener('click', toggleLike);
    placeElement.querySelector('.place__delete-icon').addEventListener('click', deleteCard);
    places.prepend(placeElement); 
}

function addInitialCards (initialCards) {
    initialCards.forEach(card => {addCard(card)});
};


const placeTemplate = document.querySelector('#place').content;
const places = document.querySelector('.places');
addInitialCards(initialCards);

let editProfileButton = document.querySelector('.profile__edit-button');
let addPlaceButton = document.querySelector('.profile__add-button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

let popupImage = document.querySelector('.popup__image');
let popupImageCaption = document.querySelector('.popup__image-caption');

let profilePopup = document.querySelector('#profile-popup');
let placePopup = document.querySelector('#place-popup');
let picturePopup = document.querySelector('#picture-popup');
let closeButtons = document.querySelectorAll('.popup__close');
let profileForm = document.querySelector('#profile-form');
let profileNameInput = profileForm.querySelector('#input-profile-name');
let profileJobInput = profileForm.querySelector('#input-profile-job');

let placeForm = document.querySelector('#place-form');
let placeNameInput = placeForm.querySelector('#input-place-name');
let placePhotoInput = placeForm.querySelector('#input-place-photo');


function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
}

function openProfileForm() {
    profileNameInput.value = profileName.textContent;
    profileJobInput.value = profileJob.textContent;
    togglePopup(profilePopup);
}

function openPlaceForm() {
  placeNameInput.value = '';
  placePhotoInput.value = '';
  togglePopup(placePopup);
}

function openImage(evt) {
  image = evt.target;
  caption = image.parentElement.querySelector('.place__info .place__name').textContent;
  popupImage.src = image.src;
  popupImageCaption.textContent = caption;
  togglePopup(picturePopup)
}

function closeForm(evt) {
  popup = evt.target.closest('.popup');
  togglePopup(popup);
}

function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    let name = profileNameInput.value;
    let job = profileJobInput.value;
    profileName.textContent = name;
    profileJob.textContent = job;
    togglePopup(profilePopup);
}

function handlePlaceFormSubmit (evt) {
  evt.preventDefault();
  let newCard = {};
  newCard.name = placeNameInput.value;
  newCard.link = placePhotoInput.value;
  addCard(newCard);
  togglePopup(placePopup);
}

editProfileButton.addEventListener('click', openProfileForm);
addPlaceButton.addEventListener('click', openPlaceForm);

closeButtons.forEach(elem => elem.addEventListener('click', closeForm));
profileForm.addEventListener('submit', handleProfileFormSubmit);
placeForm.addEventListener('submit', handlePlaceFormSubmit);

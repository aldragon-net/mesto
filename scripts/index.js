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

const placeTemplate = document.querySelector('#template-place').content;
const places = document.querySelector('.places');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__image-caption');

const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddPlace = document.querySelector('.profile__add-button');
const buttonsClose = document.querySelectorAll('.popup__close');

const popupProfile = document.querySelector('#popup-profile');
const popupPlace = document.querySelector('#popup-place');
const popupPhoto = document.querySelector('#popup-photo');

const formProfile = document.querySelector('#form-profile');
const inputProfileName = formProfile.querySelector('#input-profile-name');
const inputProfileJob = formProfile.querySelector('#input-profile-job');

const formPlace = document.querySelector('#form-place');
const inputPlaceName = formPlace.querySelector('#input-place-name');
const inputPlaceLink = formPlace.querySelector('#input-place-link');


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

function deleteCard(evt) {
  evt.target.closest('.place').remove();
}


function toggleLike(evt) {
  evt.target.classList.toggle('place__like-icon_active');
}


function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
}

function openProfileForm() {
    inputProfileName.value = profileName.textContent;
    inputProfileJob.value = profileJob.textContent;
    togglePopup(popupProfile);
}

function openPlaceForm() {
  inputPlaceName.value = '';
  inputPlaceLink.value = '';
  togglePopup(popupPlace);
}

function openImage(evt) {
  image = evt.target;
  caption = image.parentElement.querySelector('.place__info .place__name').textContent;
  popupImage.setAttribute('src', image.src);
  popupImage.setAttribute('alt', caption);
  popupImageCaption.textContent = caption;
  togglePopup(popupPhoto)
}

function closeForm(evt) {
  popup = evt.target.closest('.popup');
  togglePopup(popup);
}

function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = inputProfileName.value;
    profileJob.textContent = inputProfileJob.value;
    togglePopup(popupProfile);
}

function handlePlaceFormSubmit (evt) {
  evt.preventDefault();
  const newCard = {
    name: inputPlaceName.value,
    link: inputPlaceLink.value
  };
  addCard(newCard);
  togglePopup(popupPlace);
}

buttonEditProfile.addEventListener('click', openProfileForm);
buttonAddPlace.addEventListener('click', openPlaceForm);
buttonsClose.forEach(elem => elem.addEventListener('click', closeForm));
formProfile.addEventListener('submit', handleProfileFormSubmit);
formPlace.addEventListener('submit', handlePlaceFormSubmit);

addInitialCards(initialCards);

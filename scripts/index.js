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

const editProfileButton = document.querySelector('.profile__edit-button');
const addPlaceButton = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close');

const profilePopup = document.querySelector('#profile-popup');
const placePopup = document.querySelector('#place-popup');
const photoPopup = document.querySelector('#photo-popup');

const profileForm = document.forms['profile-form'];
const profileNameInput = profileForm.querySelector('#profile-name-input');
const profileJobInput = profileForm.querySelector('#profile-job-input');

const placeForm = document.forms['place-form'];
const placeNameInput = placeForm.querySelector('#place-name-input');
const placeLinkInput = placeForm.querySelector('#place-link-input');


function createCard (card) {
  const cardElement = placeTemplate.querySelector('.place').cloneNode(true);
  cardElement.querySelector('.place__name').textContent = card.name;
  const cardImage = cardElement.querySelector('.place__image');
  cardImage.src = card.link;
  cardImage.alt = `фотография места «${card.name}»`;
  cardImage.addEventListener('click', () => openImage(card));
  cardElement.querySelector('.place__like-icon').addEventListener('click', toggleLike);
  cardElement.querySelector('.place__delete-icon').addEventListener('click', deleteCard);
  return cardElement
}

function addCard (card) {
  const cardElement = createCard(card)
  places.prepend(cardElement);
}

function addInitialCards (initialCards) {
  initialCards.forEach(addCard);
};

function deleteCard(evt) {
  evt.target.closest('.place').remove();
}


function toggleLike(evt) {
  evt.target.classList.toggle('place__like-icon_active');
}


function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openProfileForm() {
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
  openPopup(profilePopup);
}


function openImage(card) {
  popupImage.setAttribute('src', card.link);
  popupImage.setAttribute('alt', card.name);
  popupImageCaption.textContent = card.name;
  openPopup(photoPopup)
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

editProfileButton.addEventListener('click', openProfileForm);
addPlaceButton.addEventListener('click', () => openPopup(placePopup));
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});
profileForm.addEventListener('submit', handleProfileFormSubmit);
placeForm.addEventListener('submit', handlePlaceFormSubmit);

addInitialCards(initialCards);

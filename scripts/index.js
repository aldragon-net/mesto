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
    placeElement.querySelector('.place__like-icon').addEventListener('click', toggleLike);
    placeElement.querySelector('.place__delete-icon').addEventListener('click', deleteCard);
    places.append(placeElement); 
}

function addInitialCards (initialCards) {
    initialCards.forEach(card => {addCard(card)});
};


const placeTemplate = document.querySelector('#place').content;
const places = document.querySelector('.places');
addInitialCards(initialCards);

let editButton = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('#input-name');
let jobInput = formElement.querySelector('#input-job');

function togglePopup() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    popup.classList.toggle('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    let name = nameInput.value;
    let job = jobInput.value;
    profileName.textContent = name;
    profileJob.textContent = job;
    togglePopup();
}

editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);
formElement.addEventListener('submit', handleFormSubmit);

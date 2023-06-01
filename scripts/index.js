let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');


function togglePopup() {
    popup.classList.toggle('popup_opened');
    nameInput.defaultValue = profileName.textContent;
    jobInput.defaultValue = profileJob.textContent;
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

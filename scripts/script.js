let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#job');

function togglePopup() {
    popup.classList.toggle('popup_opened');
}
  
function handleFormSubmit (evt) {
    evt.preventDefault();
    let name = nameInput.value;
    let job = jobInput.value;
    let name_heading = document.querySelector('.profile__name');
    let job_heading = document.querySelector('.profile__job');
    name_heading.textContent = name;
    job_heading.textContent = job;
    togglePopup();
}

formElement.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);

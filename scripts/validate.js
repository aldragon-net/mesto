const minUsernameLength = 2
const maxUsernameLength = 40
const minJobLength = 2
const maxJobLength = 200
const minPlaceLength = 2
const maxPlaceLength = 30


function lengthIsBetween(s, minLength, maxLength) {
  length = s.length();
  return ((length >= minLength) && (length <= maxLength))
}

function enableValidation(settings) {

}


enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-submit',
  inactiveButtonClass: 'popup__form-submit_inactive',
  inputErrorClass: 'popup__form-input_type_error',
  errorClass: 'popup__form-error_visible'
}

export const profileForm = document.forms['profile-form'];
export const profileNameInput = profileForm.querySelector('#profile-name-input');
export const profileAboutInput = profileForm.querySelector('#profile-about-input');
export const avatarLinkInput = document.forms['avatar-form'].querySelector('#avatar-link-input');
export const placeForm = document.forms['place-form'];

export const addPlaceButton = document.querySelector('.profile__add-button');
export const editProfileButton = document.querySelector('.profile__edit-button');
export const changeAvatarButon = document.querySelector('.profile__avatar-button');

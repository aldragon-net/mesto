import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';

import { initialCards,
         validationSettings,
         profileNameInput,
         profileJobInput,
         addPlaceButton,
         editProfileButton } from '../utils/constants.js';

import { getCardCreator } from '../utils/utils.js';

import './index.css';

const photoPopup = new PopupWithImage('#photo-popup');
photoPopup.setEventListeners();

const createCard = getCardCreator(photoPopup.open.bind(photoPopup));

const cardSection = new Section({
    items: initialCards,
    renderer: (item) => {
      const card = createCard(item);
      cardSection.addItem(card);
    },
  },
  '.places'
);
cardSection.renderItems();

const userInfo = new UserInfo({ nameSelector: '.profile__name', jobSelector: '.profile__job' });

const profilePopup = new PopupWithForm(
  '#profile-popup',
  (values) => {userInfo.setUserInfo(values)}
);
profilePopup.setEventListeners();
const profileFormValidator = new FormValidator(profilePopup.form, validationSettings);
profileFormValidator.enableValidation();

const placePopup = new PopupWithForm(
  '#place-popup',
  (cardData) => {cardSection.addItem(createCard(cardData))}
);
placePopup.setEventListeners();
const placeFormValidator = new FormValidator(placePopup.form, validationSettings);
placeFormValidator.enableValidation();

const handleEditProfileButtonClick = () => {
  const data = userInfo.getUserInfo();
  profileNameInput.value = data.name;
  profileJobInput.value = data.job;
  profilePopup.open();
}

editProfileButton.addEventListener('click', handleEditProfileButtonClick);

addPlaceButton.addEventListener('click', placePopup.open.bind(placePopup));

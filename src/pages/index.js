import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

import { initialCards,
         profileNameInput,
         profileJobInput,
         addPlaceButton,
         editProfileButton } from '../utils/constants.js';

import { getCardCreator } from '../utils/utils.js';

import './index.css';

const photoPopup = new PopupWithImage('#photo-popup');
photoPopup.setEventListeners();

const cardSection = new Section({
    items: initialCards,
    renderer: getCardCreator(photoPopup.open.bind(photoPopup))
  },
  '.places'
);

const userInfo = new UserInfo({ nameSelector: '.profile__name', jobSelector: '.profile__job' });

const profilePopup = new PopupWithForm('#profile-popup',
                                       (inputValues) => {userInfo.setUserInfo(inputValues)}
                                       );
profilePopup.setEventListeners();

const placePopup = new PopupWithForm('#place-popup', (newCard) => {cardSection.addItem(newCard)});
placePopup.setEventListeners();

const handleEditProfileButtonClick = () => {
  const data = userInfo.getUserInfo();
  profileNameInput.value = data.name;
  profileJobInput.value = data.job;
  profilePopup.open();
}

editProfileButton.addEventListener('click', handleEditProfileButtonClick);

addPlaceButton.addEventListener('click', placePopup.open.bind(placePopup));

import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

import { initialCards,
         profileNameInput,
         profileJobInput,
         addPlaceButton,
         editProfileButton } from '../utils/constants.js';

import { createCardRenderer } from '../utils/utils.js';

import './index.css';

const photoPopup = new PopupWithImage('#photo-popup');
photoPopup.setEventListeners();

const places = new Section({items: initialCards,
                            renderer: createCardRenderer(photoPopup.open.bind(photoPopup))
                            },
                           '.places'
                           );

const userInfo = new UserInfo({ nameSelector: '.profile__name', jobSelector: '.profile__job' });

const profilePopup = new PopupWithForm('#profile-popup',
                                       (inputValues) => {userInfo.setUserInfo(inputValues)}
                                       );
profilePopup.setEventListeners();

const placePopup = new PopupWithForm('#place-popup', (newCard) => {places.addItem(newCard)});
placePopup.setEventListeners();


editProfileButton.addEventListener('click', () => {
  const data = userInfo.getUserInfo();
  profileNameInput.value = data.name;
  profileJobInput.value = data.job;
  profilePopup.open();
});

addPlaceButton.addEventListener('click', placePopup.open.bind(placePopup));

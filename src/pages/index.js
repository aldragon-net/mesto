import Api from '../components/Api.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';

import { validationSettings,
         profileNameInput,
         profileAboutInput,
         addPlaceButton,
         editProfileButton } from '../utils/constants.js';

import { getCardCreator } from '../utils/utils.js';

import './index.css';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-73',
  headers: {
    authorization: '5f40da40-c28b-4113-a248-5874131380d9',
    'Content-Type': 'application/json'
  }
});

const photoPopup = new PopupWithImage('#photo-popup');
photoPopup.setEventListeners();

const confirmationPopup = new PopupWithForm(
  '#confirmation-popup',
  () => {console.log('Да, уверен')}
)
confirmationPopup.setEventListeners();
confirmationPopup.open();

const createCard = getCardCreator(photoPopup.open.bind(photoPopup));

const cardSection = new Section({
    items: [],
    renderer: (item) => {
      const card = createCard(item);
      cardSection.addItem(card);
    },
  },
  '.places'
);

const userInfo = new UserInfo({ nameSelector: '.profile__name', aboutSelector: '.profile__about' });

api.getProfileInfo()
  .then(userData => {
    userInfo.setUserInfo(userData);
    return userData
  })
  .then(userData => {
    api.getInitialCards()
    .then(cards => {
      cards.slice().reverse().forEach((cardData) => {
        console.log(userData._id, cardData._id)
        const owned = (userData._id !== cardData.owner._id)
        cardSection.addItem(createCard(cardData, owned))});
    })
    .catch((err) => {console.log(`Не удалось загрузить карточки. Удалённый сервер вернул ошибку ${err}`)})
  } )
  .catch((err) => {console.log(`Не удалось получить данные профиля! Удалённый сервер вернул ошибку ${err}`)});


const profilePopup = new PopupWithForm(
  '#profile-popup',
  (values) => {
    api.updateProfileInfo(values)
      .then(values => {
        userInfo.setUserInfo(values)
      })
      .catch((err) => {console.log(`Не удалось обновить данные профиля! Удалённый сервер вернул ошибку ${err}`)});
    }
);
profilePopup.setEventListeners();
const profileFormValidator = new FormValidator(profilePopup.form, validationSettings);
profileFormValidator.enableValidation();

const placePopup = new PopupWithForm(
  '#place-popup',
  (cardData) => {
    api.createCard(cardData)
      .then(cardData => {
        cardSection.addItem(createCard(cardData))
      })
      .catch((err) => {console.log(`Не удалось создать карточку! Удалённый сервер вернул ошибку ${err}`)});
  }
);

placePopup.setEventListeners();
const placeFormValidator = new FormValidator(placePopup.form, validationSettings);
placeFormValidator.enableValidation();

const handleEditProfileButtonClick = () => {
  const data = userInfo.getUserInfo();
  profileNameInput.value = data.name;
  profileAboutInput.value = data.about;
  profilePopup.open();
}

editProfileButton.addEventListener('click', handleEditProfileButtonClick);

addPlaceButton.addEventListener('click', placePopup.open.bind(placePopup));

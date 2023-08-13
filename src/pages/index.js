import Api from '../components/Api.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import FormValidator from '../components/FormValidator.js';

import { validationSettings,
         profileNameInput,
         profileAboutInput,
         addPlaceButton,
         editProfileButton,
         changeAvatarButon } from '../utils/constants.js';

import { getCardCreator } from '../utils/utils.js';

import { apiSettings } from '../utils/settings.js';

import './index.css';

const api = new Api(apiSettings);

const photoPopup = new PopupWithImage('#photo-popup');
photoPopup.setEventListeners();

const confirmationPopup = new PopupWithConfirmation('#confirmation-popup');
confirmationPopup.setEventListeners();

function confirmDelete(confirmationPopup) {
  confirmationPopup.button.textContent = "Да"
  confirmationPopup.open()
  return new Promise((resolve, reject) => {
    confirmationPopup.setResolvers(
      () => {resolve('Confirmed')},
      () => {reject('Not confrimed')}
    )
  })
}

function handleCardDelete(card_id, element) {
  confirmDelete(confirmationPopup)
    .then(() => {
      confirmationPopup.button.textContent = "Удаляется…"
      return api.deleteCard(card_id)
    })
    .then(() => {
      element.remove();
      element = null;
      confirmationPopup.close();
    })
    .catch((err) => {console.log(`Карточка не удалена: ${err}`)})
}

function handleCardLike(card_id, liked) {
  return !liked ? api.likeCard(card_id) : api.unlikeCard(card_id)
  }

const createCard = getCardCreator(photoPopup.open.bind(photoPopup), handleCardDelete, handleCardLike);

const cardSection = new Section({
    renderer: (item, user) => {
      const card = createCard(item, user);
      cardSection.addItem(card);
    }
  },
  '.places'
);

const userInfo = new UserInfo(
  { 
    nameSelector: '.profile__name',
    aboutSelector: '.profile__about',
    avatarSelector: '.profile__avatar'
   }
);

api.getProfileInfo()
  .then(userData => {
    userInfo.setUserInfo(userData);
    userInfo.setAvatar(userData);
    return userData
  })
  .then(userData => {
    api.getInitialCards()
    .then(cards => {
      cardSection.renderItems(cards.slice().reverse(), userData)
    })
    .catch((err) => {console.log(`Не удалось загрузить карточки: ${err}`)})
  })
  .catch((err) => {console.log(`Не удалось получить данные профиля: ${err}`)});

const profilePopup = new PopupWithForm(
  '#profile-popup',
  (values) => {
    profilePopup.button.textContent = 'Сохранение…'
    api.updateProfileInfo(values)
      .then(values => {
        userInfo.setUserInfo(values);
        profilePopup.close();
        profilePopup.button.textContent = 'Сохранить'
      })
      .catch((err) => {console.log(`Не удалось обновить профиль: ${err}`)});
    }
);
profilePopup.setEventListeners();
const profileFormValidator = new FormValidator(profilePopup.form, validationSettings);
profileFormValidator.enableValidation();

const avatarPopup = new PopupWithForm(
  '#avatar-popup',
  (values) => {
    avatarPopup.button.textContent = 'Сохранение…'
    api.changeAvatar(values)
      .then(values => {
        userInfo.setAvatar(values);
        avatarPopup.close();
        avatarPopup.button.textContent = 'Сохранить'
      })
      .catch((err) => {console.log(`Не удалось обновить аватар: ${err}`)});
  });
avatarPopup.setEventListeners();
const avatarFormValidator = new FormValidator(avatarPopup.form, validationSettings);
avatarFormValidator.enableValidation();

const placePopup = new PopupWithForm(
  '#place-popup',
  (cardData) => {
    placePopup.button.textContent = 'Создание карточки…'
    api.createCard(cardData)
      .then(cardData => {
        cardSection.addItem(createCard(cardData, cardData.owner))
      })
      .catch((err) => {console.log(`Не удалось создать карточку: ${err}`)});
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

changeAvatarButon.addEventListener('click', avatarPopup.open.bind(avatarPopup));

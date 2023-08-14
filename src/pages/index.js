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
         avatarLinkInput,
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

function handleCardDelete(cardId, element) {
  confirmDelete(confirmationPopup)
    .then(() => {
      confirmationPopup.button.textContent = "Удаляется…"
      return api.deleteCard(cardId)
    })
    .then(() => {
      element.remove();
      element = null;
      confirmationPopup.close();
    })
    .catch((err) => {console.log(`Карточка не удалена: ${err}`)})
}

function handleCardLike(cardId, liked) {
  return !liked ? api.likeCard(cardId) : api.unlikeCard(cardId)
  }

const createCard = getCardCreator(photoPopup.open.bind(photoPopup), handleCardDelete, handleCardLike);

const cardSection = new Section({
    renderer: (item, user) => {
      const card = createCard(item, user);
      cardSection.appendItem(card);
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
        cardSection.renderItems(cards, userData)
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
      })
      .catch((err) => {console.log(`Не удалось обновить профиль: ${err}`)})
      .finally(() =>
        profilePopup.button.textContent = 'Сохранить'
      );
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
      })
      .catch((err) => {console.log(`Не удалось обновить аватар: ${err}`)})
      .finally(() => {
        avatarPopup.button.textContent = 'Сохранить'
      });
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
        cardSection.prependItem(createCard(cardData, cardData.owner));
        placePopup.close()
      })
      .catch((err) => {console.log(`Не удалось создать карточку: ${err}`)})
      .finally(() => {
        placePopup.button.textContent = 'Создать'
      });;
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

const handleEditAvatarButtonClick = () => {
  const data = userInfo.getUserInfo();
  avatarLinkInput.value = data.avatar;
  avatarPopup.open()
}

editProfileButton.addEventListener('click', handleEditProfileButtonClick);
changeAvatarButon.addEventListener('click', handleEditAvatarButtonClick);
addPlaceButton.addEventListener('click', placePopup.open.bind(placePopup));

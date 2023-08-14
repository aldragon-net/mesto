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

let currentUserId;

const userInfo = new UserInfo(
  {
    nameSelector: '.profile__name',
    aboutSelector: '.profile__about',
    avatarSelector: '.profile__avatar'
   }
);

const photoPopup = new PopupWithImage('#photo-popup');
photoPopup.setEventListeners();

const confirmationPopup = new PopupWithConfirmation('#confirmation-popup');
confirmationPopup.setEventListeners();

const handleCardDelete = (card) => {
  confirmationPopup.setButtonText('Удаление…');
  api.deleteCard(card.getId())
    .then(() => {
      confirmationPopup.close();
      card.deleteCard();
    })
    .catch((err) => {console.log(`Карточка не удалена: ${err}`)})
    .finally(() => {
      confirmationPopup.setButtonText('Да');
    })
};
const openDeleteConfirmationPopup = (card) => {
  confirmationPopup.setCallback(() => handleCardDelete(card));
  confirmationPopup.open();
};
const handleCardLike = (card) => {
  const apiLikeMethod = (!card.isLiked()) ? api.likeCard.bind(api) : api.unlikeCard.bind(api);
  apiLikeMethod(card.getId())
    .then((cardData) => {
      card.updateLikes(cardData.likes);
    })
    .catch((err) => console.log(`Ошибка обработки лайка: ${err}`))
};
const createCard = getCardCreator(
  photoPopup.open.bind(photoPopup),
  openDeleteConfirmationPopup,
  handleCardLike
);
const cardSection = new Section(
  {
    renderer: (item) => {
      const card = createCard(item, currentUserId);
      cardSection.appendItem(card);
    }
  },
  '.places'
);

const placePopup = new PopupWithForm(
  '#place-popup',
  (cardData) => {
    placePopup.setButtonText('Создание карточки…');
    api.createCard(cardData)
      .then(cardData => {
        cardSection.prependItem(createCard(cardData, cardData.owner._id));
        placePopup.close()
      })
      .catch((err) => {console.log(`Не удалось создать карточку: ${err}`)})
      .finally(() => {
        placePopup.setButtonText('Создать');
      });
  }
);
placePopup.setEventListeners();
const placeFormValidator = new FormValidator(placePopup.form, validationSettings);
placeFormValidator.enableValidation();
addPlaceButton.addEventListener('click', placePopup.open.bind(placePopup));

const profilePopup = new PopupWithForm(
  '#profile-popup',
  (values) => {
    profilePopup.setButtonText('Сохранение…');
    api.updateProfileInfo(values)
      .then(values => {
        userInfo.setUserInfo(values);
        profilePopup.close();
      })
      .catch((err) => {console.log(`Не удалось обновить профиль: ${err}`)})
      .finally(() => {
        profilePopup.setButtonText('Сохранить')
      });
  }
);
profilePopup.setEventListeners();
const profileFormValidator = new FormValidator(profilePopup.form, validationSettings);
profileFormValidator.enableValidation();
const handleEditProfileButtonClick = () => {
  const data = userInfo.getUserInfo();
  profileNameInput.value = data.name;
  profileAboutInput.value = data.about;
  profilePopup.open();
};
editProfileButton.addEventListener('click', handleEditProfileButtonClick);

const avatarPopup = new PopupWithForm(
  '#avatar-popup',
  (values) => {
    avatarPopup.setButtonText('Сохранение…');
    api.changeAvatar(values)
      .then(values => {
        userInfo.setAvatar(values);
        avatarPopup.close();
      })
      .catch((err) => {console.log(`Не удалось обновить аватар: ${err}`)})
      .finally(() => {
        avatarPopup.setButtonText('Сохранить');
      });
  }
);
avatarPopup.setEventListeners();
const avatarFormValidator = new FormValidator(avatarPopup.form, validationSettings);
avatarFormValidator.enableValidation();
const handleEditAvatarButtonClick = () => {
  const data = userInfo.getUserInfo();
  avatarLinkInput.value = data.avatar;
  avatarPopup.open()
};
changeAvatarButon.addEventListener('click', handleEditAvatarButtonClick);

Promise.all([api.getProfileInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    currentUserId = userData._id;
    userInfo.setUserInfo(userData);
    userInfo.setAvatar(userData);
    cardSection.renderItems(cards);
  })
  .catch((err) => {console.log(`Ошибка получения данных с сервера: ${err}`)})

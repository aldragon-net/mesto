export default class Card {
  constructor( { name, link, owner, likes, _id }, user, templateSelector, handleCardClick, handleDelete, handleLike) {
    this._name = name;
    this._link = link;
    this._owned = user._id === owner._id
    this._id = _id;
    this._likes = likes
    this._user = user;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick
    this._handleDelete = handleDelete;
    this._handleLike = handleLike;
  }

  _getTemplate () {
    const cardTemplate = document
                           .querySelector(this._templateSelector)
                           .content.querySelector('.place')
                           .cloneNode(true);
    return cardTemplate
  }

  _renderLikes () {
    this._likeCounter.textContent = this._likes.length;
    this._liked = this._likes.some(user => user._id === this._user._id);
    if (this._liked) {
      this._buttonLike.classList.add('place__like-icon_active')
    } else {
      this._buttonLike.classList.remove('place__like-icon_active')
    }
  }

  updateLikes (cardData) {
    this._likes = cardData.likes;
    this._renderLikes();
  }

  deleteCard () {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners () {
    this._buttonLike.addEventListener('click', (() => this._handleLike(this)));
    if (this._owned) {
      this._buttonDelete.addEventListener('click', (() => this._handleDelete(this)))
    } else {
      this._buttonDelete.remove();
    };
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._link, this._name));
  }

  _fillContent () {
    this._element.querySelector('.place__name').textContent = this._name;
    this._cardImage.src = this._link;
    this._renderLikes();
    this._cardImage.alt = `фотография места «${this._name}»`;
  }

  getId () {
    return this._id
  }

  isLiked () {
    return this._liked
  }

  generateCard () {
    this._element = this._getTemplate();
    this._buttonDelete = this._element.querySelector('.place__delete-icon')
    this._buttonLike = this._element.querySelector('.place__like-icon');
    this._likeCounter = this._element.querySelector('.place__like-counter');
    this._cardImage = this._element.querySelector('.place__image');
    this._fillContent();
    this._setEventListeners();
    return this._element;
  }
}

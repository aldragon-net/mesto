export default class Card {
  constructor( { name, link }, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick
  }

  _getTemplate () {
    const cardTemplate = document
                           .querySelector(this._templateSelector)
                           .content.querySelector('.place')
                           .cloneNode(true);
    return cardTemplate
  }

  _toggleLike () {
    this._buttonLike.classList.toggle('place__like-icon_active');
  }

  _deleteCard () {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners () {
    this._buttonLike = this._element.querySelector('.place__like-icon');
    this._buttonLike.addEventListener('click', () => {this._toggleLike()});
    this._element.querySelector('.place__delete-icon').addEventListener('click', () => {this._deleteCard()});
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._link, this._name));
  }

  _fillContent () {
    this._element.querySelector('.place__name').textContent = this._name;
    this._cardImage = this._element.querySelector('.place__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = `фотография места «${this._name}»`;
  }

  generateCard () {
    this._element = this._getTemplate();
    this._fillContent();
    this._setEventListeners();
    return this._element;
  }
}

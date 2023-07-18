export default class Card {
  constructor(cardData, templateSelector, openImage) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._openImage = openImage
  }

  _getTemplate () {
    const cardTemplate = document
                           .querySelector(this._templateSelector)
                           .content.querySelector('.place')
                           .cloneNode(true);
    return cardTemplate
  }

  _toggleLike (evt) {
    evt.target.classList.toggle('place__like-icon_active');
  }

  _deleteCard () {
    this._element.remove();
  }

  _setEventListeners () {
    this._element.querySelector('.place__like-icon').addEventListener('click', (evt) => {this._toggleLike(evt)});
    this._element.querySelector('.place__delete-icon').addEventListener('click', () => {this._deleteCard()});
    this._cardImage.addEventListener('click', () => this._openImage(this._link, this._name));
  }

  _fillContent () {
    this._element.querySelector('.place__name').textContent = this._name;
    this._cardImage = this._element.querySelector('.place__image');
    this._cardImage.setAttribute('src', this._link);
    this._cardImage.setAttribute('alt', `фотография места «${this._name}»`);
  }

  generateCard () {
    this._element = this._getTemplate();
    this._fillContent();
    this._setEventListeners();
    return this._element;
  }
}

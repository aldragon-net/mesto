import Popup from "./Popup.js";

export default class PopupWithButton extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this.form = this._popupElement.querySelector('.popup__form');
    this._button = document.querySelector('.popup__form .popup__form-submit');
  }

  setButtonText(text) {
    this._button.textContent = text;
}
}

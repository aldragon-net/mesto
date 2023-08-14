import Popup from "./Popup.js";

export default class PopupWithButton extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this.form = this._popupElement.querySelector('.popup__form');
    this._button = this.form.querySelector('.popup__form-submit');
  }

  setButtonText(text) {
    console.log('текст кнопки', text)
    this._button.textContent = text;
}
}

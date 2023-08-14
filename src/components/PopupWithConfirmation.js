import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this.form = this._popupElement.querySelector('.popup__form');
    this._button = this.form.querySelector('.popup__form-submit');
  }
  
  setButtonText(text) {
    this._button.textContent = text;
  }

  setEventListeners () {
    super.setEventListeners();
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    })
  }

  setCallback (submitCallback) {
    this._handleSubmit = submitCallback;
  }
}

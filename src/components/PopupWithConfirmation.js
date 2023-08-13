import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this.form = this._popupElement.querySelector('.popup__form');
    this.button = this.form.querySelector('.popup__form-submit');
    this._inputs = this.form.querySelectorAll('.popup__form-input');
  }

  setEventListeners () {
    super.setEventListeners();
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._onConfirm();
    })
  }

  setResolvers (onConfirm, onClose) {
    this._onConfirm = onConfirm;
    this._onClose = onClose;
  }

  close () {
    this._onClose();
    super.close()
  }

}

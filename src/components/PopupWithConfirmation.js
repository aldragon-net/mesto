import PopupWithButton from "./PopupWithButton.js";

export default class PopupWithConfirmation extends PopupWithButton {
  constructor (popupSelector) {
    super(popupSelector);
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

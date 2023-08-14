import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor (popupSelector, submitHandler) {
    super(popupSelector);
    this.form = this._popupElement.querySelector('.popup__form');
    this._button = this.form.querySelector('.popup__form-submit');
    this._inputs = this.form.querySelectorAll('.popup__form-input');
    this._submitHandler = submitHandler;
  }

  _getInputValues () {
    const inputValues = {};
    this._inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    })
    return inputValues;
  }

  setButtonText(text) {
    this._button.textContent = text;
  }

  setEventListeners () {
    super.setEventListeners();
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._submitHandler(inputValues);
    })
  }

  close () {
    this.form.reset();
    super.close()
  }
}

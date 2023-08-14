import PopupWithButton from "./PopupWithButton.js";

export default class PopupWithForm extends PopupWithButton {
  constructor (popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._inputs = this.form.querySelectorAll('.popup__form-input');
  }

  _getInputValues () {
    const inputValues = {};
    this._inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    })
    return inputValues;
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

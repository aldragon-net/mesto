import Popup from "./Popup.js";
import FormValidator from "./FormValidator.js";
import { validationSettings } from "../utils/constants.js";

export default class PopupWithForm extends Popup {
  constructor (popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popupElement.querySelector('.popup__form');
    this._inputs = this._form.querySelectorAll('.popup__form-input');
    this.formValidator = new FormValidator(this._form, validationSettings);
    this.formValidator.enableValidation();
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
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._submitHandler(inputValues);
      this.close();
    })
  }

  close () {
    this._form.reset();
    super.close()
  }
}

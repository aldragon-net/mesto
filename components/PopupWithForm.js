import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor (popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
  }

  _getInputValues () {

  }

  setEventListeners () {
    super.setEventListeners();
    placeForm.addEventListener('submit', () => {
      const data = this._getInputValues();
      this._submitHandler(data);
    })
  }

  close () {
    super.close()
  }
}

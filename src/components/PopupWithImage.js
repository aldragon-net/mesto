import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupElement.querySelector('.popup__image');
    this._popupImageCaption = this._popupElement.querySelector('.popup__image-caption');
  }

  open ({link, name}) {
    this._popupImage.setAttribute('src', link);
    this._popupImage.setAttribute('alt', `фотография места «${name}»`);
    this._popupImageCaption.textContent = name;
    super.open()
  }
}

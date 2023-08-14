export default class Section {
  constructor ( { renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderItem = renderer;
  };

  prependItem (itemElement) {
    this._container.prepend(itemElement);
  }

  appendItem (itemElement) {
    this._container.append(itemElement);
  }

  renderItems (items) {
    items.forEach(this._renderItem);
  }
}

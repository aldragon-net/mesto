export default class Section {
  constructor ( { renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderItem = renderer;
  };

  addItem (itemElement) {
    this._container.prepend(itemElement);
  }

  renderItems (items, user) {
    items.forEach((item) => {this._renderItem(item, user)});
  }
}

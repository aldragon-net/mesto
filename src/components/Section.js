export default class Section {
  constructor ( {items, renderer}, containerSelector) {
    this._items = items;
    this._container = document.querySelector(containerSelector);
    this._renderItem = renderer;
  };

  addItem (itemElement) {
    this._container.prepend(itemElement);
  }

  renderItems () {
    this._items.forEach((item) => {this._renderItem(item)});
  }
}

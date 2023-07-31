export default class Section {
  constructor ( {items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
    this.renderItems();
  }

  addItem (item) {
    const itemElement = this._renderer(item);
    this._container.prepend(itemElement);
  }

  renderItems () {
    this._items.forEach((item) => {this.addItem(item)});
  }
}

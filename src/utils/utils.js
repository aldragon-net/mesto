import Card from "../components/Card.js";

export function createCardRenderer (imageOpener) {
  const cardRenderer = (cardData) => {
    const card = new Card(cardData, '#template-place', () => {imageOpener(cardData)});
    const cardElement = card.generateCard();
    return cardElement;
  }
  return cardRenderer
}

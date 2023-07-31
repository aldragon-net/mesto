import Card from "../components/Card.js";

export function createCardRenderer (openImage) {
  const cardRenderer = (cardData) => {
    const card = new Card(cardData, '#template-place', () => {openImage(cardData)});
    const cardElement = card.generateCard();
    return cardElement;
  }
  return cardRenderer
}

import Card from "../components/Card.js";

export function getCardCreator (openImage) {
  const createCard = (cardData) => {
    const card = new Card(cardData, '#template-place', () => {openImage(cardData)});
    const cardElement = card.generateCard();
    return cardElement;
  }
  return createCard
}

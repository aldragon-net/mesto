import Card from "../components/Card.js";

export function getCardCreator (openImage) {
  const createCard = (cardData, owned) => {
    const card = new Card(cardData, owned, '#template-place', () => {openImage(cardData)});
    const cardElement = card.generateCard();
    return cardElement;
  }
  return createCard
}

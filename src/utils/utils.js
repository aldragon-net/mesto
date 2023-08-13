import Card from "../components/Card.js";

export function getCardCreator (openImage, handleDelete, handleCardLike) {
  const createCard = (cardData, user) => {
    const card = new Card(
      cardData, 
      user,
      '#template-place',
      () => {openImage(cardData)},
      handleDelete,
      handleCardLike
    );
    const cardElement = card.generateCard();
    return cardElement;
  }
  return createCard
}

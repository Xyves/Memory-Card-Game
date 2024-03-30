import { useEffect, useState } from "react";
export default function Card({ cards, handleClick }) {
  const [updatedCards, setUpdatedCards] = useState([]);
  
  // Logic for fetching cards
  useEffect(() => {
    const fetchDataForAllCards = async () => {
      try {
        const updatedCardsData = await Promise.all(
          cards.map(async (card) => {
            const response = await fetch(
              `https://rickandmortyapi.com/api/character/${card.num}`
            );
            const data = await response.json();
            return { ...card, src: data.image, name: data.name };
          })
        );
        setUpdatedCards(updatedCardsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataForAllCards();
  }, [cards]);

  return (
    <div className="cardContainer">
      {updatedCards.map((card, index) => (
        <div className="card" onClick={() => handleClick(card.num)} key={index}>
          <div className="image">
            <img src={card.src} alt="" />
          </div>
          <div className="textContainer">
            <h2>{card.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

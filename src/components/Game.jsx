import { v4 as uuidv4 } from "uuid";
import { useEffect, useState, useRef } from "react";
import Card from "./Card";
export default function Main() {
  const calculateNum = () => {
    return Math.floor(Math.random() * 143) + 1;
  };

  const initialState = new Array(8).fill({
    num: calculateNum(),
    name: "",
    id: uuidv4(),
    src: "",
  });
  const [cards, setCards] = useState(initialState);

  // Initial load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const updatedCards = await Promise.all(
          cards.map(async (card) => {
            const response = await fetch(
              `https://gravity-falls-api.vercel.app/api/characters/${card.num}`
            );
            const data = await response.json();
            return { ...card, name: data.name, src: data.image };
          })
        );
        setCards(updatedCards);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const updatedCards = await Promise.all(
          cards.map(async (card) => {
            const response = await fetch(
              `https://gravity-falls-api.vercel.app/api/characters/${card.num}`
            );
            const data = await response.json();
            return { ...card, name: data.name, src: data.image };
          })
        );
        setCards(updatedCards);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [cards]);

  // Fisher–Yates shuffle
  const shuffle = () => {
    const shuffledArray = [...cards];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    setCards(shuffledArray);
  };
  return (
    <main>
      <div className="cardContainer">
        {cards.map((num, index, name) => (
          <Card key={index} num={num} name={name} shuffle={shuffle} />
        ))}
      </div>
    </main>
  );
}

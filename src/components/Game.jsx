import { v4 as uuidv4 } from "uuid";
import { useEffect, useState, useRef } from "react";
import Card from "./Card";
export default function Main() {
  const initialState = new Array(8).fill({
    num: calculateNum(),
    name: "",
    id: uuidv4(),
    src: "",
  });
  const updateCards = () => {
    useEffect(() => {
      fetch();
    });
    const newArray = new Array(8).fill({}).map(() => ({
      num: calculateNum(),
      name: "",
      id: uuidv4(),
      src: "",
    }));
    setCards(newArray);
  };
  const calculateNum = () => {
    return Math.floor(Math.random() * 143) + 1;
  };
  const shuffle = () => {};
  const [cards, setCards] = useState(initialState);
  return (
    <main>
      <div className="cardContainer">
        {cards.map((num, index) => (
          <Card key={index} shuffle={shuffle} number={num} />
        ))}
      </div>
    </main>
  );
}

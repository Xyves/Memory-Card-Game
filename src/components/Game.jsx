import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Card from "./Card";
export default function Game({ score, bestScore, setScore, setBestScore }) {
  const [usedNumbers, setUsedNumbers] = useState([]);
  const handleIncrement = () => {
    setScore((prevScore) => prevScore + 1);
  };
  const calculateNum = () => {
    return Math.floor(Math.random() * 255) + 1;
  };
  const generateRandomCards = () => {
    return Array.from({ length: 8 }, () => ({
      num: calculateNum(),
      name: "",
      id: uuidv4(),
      src: "",
    }));
  };
  const [cards, setCards] = useState(generateRandomCards);

  const handleClick = (num) => {
    const isRepeated = usedNumbers.includes(num);
    if (!isRepeated) {
      handleIncrement();
      shuffle();
      if (bestScore === null || score + 1 > bestScore) {
        setBestScore(score + 1);
      }
      if (score % 5 === 0) {
        setCards(generateRandomCards);
      }
    } else {
      setScore(0);
      setUsedNumbers([]);
      setCards(generateRandomCards);
      if (bestScore === null || score > bestScore) {
        // Update bestScore to the current score
        setBestScore(score);
      }
    }
    // Update usedNumbers array after checking isRepeated
    setUsedNumbers((prevUsedNumbers) => [...prevUsedNumbers, num]);
  };
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
      <Card shuffle={shuffle} cards={cards} handleClick={handleClick} />
    </main>
  );
}

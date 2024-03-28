import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import Card from "./Card";
export default function Main({ score, bestScore, setScore, setBestScore }) {
  const handleIncrement = () => {
    setScore((prevScore) => prevScore + 1);
  };
  const [usedNumbers, setUsedNumbers] = useState([]);
  const calculateNum = () => {
    return Math.floor(Math.random() * 153) + 1;
  };

  const initialCards = Array.from({ length: 8 }, () => ({
    num: calculateNum(),
    name: "",
    id: uuidv4(),
    src: "",
  }));
  const [cards, setCards] = useState(initialCards);

  useEffect(() => {
    console.log(usedNumbers);
  }, [usedNumbers]);

  const handleClick = (num) => {
    const isRepeated = usedNumbers.includes(num);

    if (!isRepeated) {
      handleIncrement();
      if (bestScore === null || score + 1 > bestScore) {
        // Check if the new score surpasses the best score
        setBestScore(score + 1); // Update bestScore to the new score
      }
    } else {
      setScore(0); // Reset score to 0
      setUsedNumbers([]); // Reset usedNumbers array
      if (bestScore === null || score > bestScore) {
        // Check if the current score surpasses the best score
        setBestScore(score); // Update bestScore to the current score
      }
    }

    // Update usedNumbers after checking isRepeated
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

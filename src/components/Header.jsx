import { useRef, useState } from "react";
const Header = () => {
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);
  return (
    <header>
      <h1>Memory Game</h1>
      <div className="score">
        <span>Current score: {score}</span>
        <span>Best score: {bestScore}</span>
      </div>
    </header>
  );
};
export default Header;

import { useState } from "react";
import Game from "./components/Game";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="container">
      <Header score={score} bestScore={bestScore} />
      <Game
        score={score}
        bestScore={bestScore}
        setScore={setScore}
        setBestScore={setBestScore}
      />
      <Footer />
    </div>
  );
}

export default App;

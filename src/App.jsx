import { useState, useRef } from "react";
import Game from "./components/Game";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/App.css";

function App() {
  const handleClick = () => {
    setScore(score + 1);
  };
  return (
    <div className="container">
      <Header />
      <Game handleClick={handleClick}></Game>
      <Footer />
    </div>
  );
}

export default App;

import { v4 as uuidv4 } from "uuid";
import { useEffect, useState, useRef } from "react";
import Card from "./Card";
export default function Main() {
  const shuffle = () => {};
  const randomNumbers = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 143) + 1
  );
  return (
    <main>
      <div className="cardContainer">
        {randomNumbers.map((number, index) => (
          <Card
            key={index}
            index={uuidv4()}
            shuffle={shuffle}
            number={number}
          />
        ))}
      </div>
    </main>
  );
}

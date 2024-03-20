import { useEffect } from "react";
import Card from "./Card";
export default function Main(handleClick) {
  return (
    <main>
      <div className="cardContainer">
        {[...Array(12)].map((_, index) => (
          <Card key={index} index={index + 1} />
        ))}
      </div>
    </main>
  );
}

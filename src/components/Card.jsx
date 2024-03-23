import { useEffect } from "react";
export default function Card({ num, id, name }) {
  const handleClick = () => {
    console.log(num);
  };
  return (
    <div className="card" onClick={handleClick}>
      <div className="image">
        <img src="" alt="" />
      </div>
      <div className="textContainer">
        <h2>{name}</h2>
      </div>
    </div>
  );
}

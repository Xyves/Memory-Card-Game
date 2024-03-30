const Header = ({ score, bestScore }) => {
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

export default function Square({ value, onSquareClick, squaro }) {
  return (
    <button className={squaro} onClick={onSquareClick}>
      {value}
    </button>
  );
}
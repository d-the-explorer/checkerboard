export default function Board({ xIsNext, squares, onPlay }) {
  const [selectedPiece, setSelectedPiece] = useState(null);

  function handleClick(r, c) {
    const clickedValue = squares[r][c];

    if (!selectedPiece) {
      if (clickedValue !== "") {
        setSelectedPiece({ r, c });
      } else {
        alert("Please select a piece first!");
      }
      return;
    }

    if (selectedPiece.r === r && selectedPiece.c === c) {
      setSelectedPiece(null);
      return;
    }

    if (clickedValue !== "") {
      setSelectedPiece({ r, c });
      return;
    }

    if (clickedValue === "") {
      const nextSquares = squares.map(row => [...row]);
      const piece = nextSquares[selectedPiece.r][selectedPiece.c];

      nextSquares[selectedPiece.r][selectedPiece.c] = "";
      nextSquares[r][c] = piece;

      onPlay(nextSquares);
      setSelectedPiece(null);
    }
  }

  let status = selectedPiece 
    ? `Piece selected at (${selectedPiece.r}, ${selectedPiece.c}). Choose an empty square to move!` 
    : "Click a piece to move.";

  return (
    <>
      <div className="status">{status}</div>
      
      <div className="board-row">
        <Square value={squares[0][0]} onSquareClick={() => handleClick(0,0)} squaro="square" />
        <Square value={squares[0][1]} onSquareClick={() => handleClick(0,1)} squaro="squarer" />
        <Square value={squares[0][2]} onSquareClick={() => handleClick(0,2)} squaro="square" />
        <Square value={squares[0][3]} onSquareClick={() => handleClick(0,3)} squaro="squarer" />
        <Square value={squares[0][4]} onSquareClick={() => handleClick(0,4)} squaro="square" />
        <Square value={squares[0][5]} onSquareClick={() => handleClick(0,5)} squaro="squarer" />
        <Square value={squares[0][6]} onSquareClick={() => handleClick(0,6)} squaro="square" />
        <Square value={squares[0][7]} onSquareClick={() => handleClick(0,7)} squaro="squarer" />
      </div>
      <div className="board-row">
        <Square value={squares[1][0]} onSquareClick={() => handleClick(1,0)} squaro="squarer" />
        <Square value={squares[1][1]} onSquareClick={() => handleClick(1,1)} squaro="square" />
        <Square value={squares[1][2]} onSquareClick={() => handleClick(1,2)} squaro="squarer" />
        <Square value={squares[1][3]} onSquareClick={() => handleClick(1,3)} squaro="square" />
        <Square value={squares[1][4]} onSquareClick={() => handleClick(1,4)} squaro="squarer" />
        <Square value={squares[1][5]} onSquareClick={() => handleClick(1,5)} squaro="square" />
        <Square value={squares[1][6]} onSquareClick={() => handleClick(1,6)} squaro="squarer" />
        <Square value={squares[1][7]} onSquareClick={() => handleClick(1,7)} squaro="square" />
      </div>
      <div className="board-row">
        <Square value={squares[2][0]} onSquareClick={() => handleClick(2,0)} squaro="square" />
        <Square value={squares[2][1]} onSquareClick={() => handleClick(2,1)} squaro="squarer" />
        <Square value={squares[2][2]} onSquareClick={() => handleClick(2,2)} squaro="square" />
        <Square value={squares[2][3]} onSquareClick={() => handleClick(2,3)} squaro="squarer" />
        <Square value={squares[2][4]} onSquareClick={() => handleClick(2,4)} squaro="square" />
        <Square value={squares[2][5]} onSquareClick={() => handleClick(2,5)} squaro="squarer" />
        <Square value={squares[2][6]} onSquareClick={() => handleClick(2,6)} squaro="square" />
        <Square value={squares[2][7]} onSquareClick={() => handleClick(2,7)} squaro="squarer" />
      </div>
      <div className="board-row">
        <Square value={squares[3][0]} onSquareClick={() => handleClick(3,0)} squaro="squarer" />
        <Square value={squares[3][1]} onSquareClick={() => handleClick(3,1)} squaro="square" />
        <Square value={squares[3][2]} onSquareClick={() => handleClick(3,2)} squaro="squarer" />
        <Square value={squares[3][3]} onSquareClick={() => handleClick(3,3)} squaro="square" />
        <Square value={squares[3][4]} onSquareClick={() => handleClick(3,4)} squaro="squarer" />
        <Square value={squares[3][5]} onSquareClick={() => handleClick(3,5)} squaro="square" />
        <Square value={squares[3][6]} onSquareClick={() => handleClick(3,6)} squaro="squarer" />
        <Square value={squares[3][7]} onSquareClick={() => handleClick(3,7)} squaro="square" />
      </div>
      <div className="board-row">
        <Square value={squares[4][0]} onSquareClick={() => handleClick(4,0)} squaro="square" />
        <Square value={squares[4][1]} onSquareClick={() => handleClick(4,1)} squaro="squarer" />
        <Square value={squares[4][2]} onSquareClick={() => handleClick(4,2)} squaro="square" />
        <Square value={squares[4][3]} onSquareClick={() => handleClick(4,3)} squaro="squarer" />
        <Square value={squares[4][4]} onSquareClick={() => handleClick(4,4)} squaro="square" />
        <Square value={squares[4][5]} onSquareClick={() => handleClick(4,5)} squaro="squarer" />
        <Square value={squares[4][6]} onSquareClick={() => handleClick(4,6)} squaro="square" />
        <Square value={squares[4][7]} onSquareClick={() => handleClick(4,7)} squaro="squarer" />
      </div>
      <div className="board-row">
        <Square value={squares[5][0]} onSquareClick={() => handleClick(5,0)} squaro="squarer" />
        <Square value={squares[5][1]} onSquareClick={() => handleClick(5,1)} squaro="square" />
        <Square value={squares[5][2]} onSquareClick={() => handleClick(5,2)} squaro="squarer" />
        <Square value={squares[5][3]} onSquareClick={() => handleClick(5,3)} squaro="square" />
        <Square value={squares[5][4]} onSquareClick={() => handleClick(5,4)} squaro="squarer" />
        <Square value={squares[5][5]} onSquareClick={() => handleClick(5,5)} squaro="square" />
        <Square value={squares[5][6]} onSquareClick={() => handleClick(5,6)} squaro="squarer" />
        <Square value={squares[5][7]} onSquareClick={() => handleClick(5,7)} squaro="square" />
      </div>
      <div className="board-row">
        <Square value={squares[6][0]} onSquareClick={() => handleClick(6,0)} squaro="square" />
        <Square value={squares[6][1]} onSquareClick={() => handleClick(6,1)} squaro="squarer" />
        <Square value={squares[6][2]} onSquareClick={() => handleClick(6,2)} squaro="square" />
        <Square value={squares[6][3]} onSquareClick={() => handleClick(6,3)} squaro="squarer" />
        <Square value={squares[6][4]} onSquareClick={() => handleClick(6,4)} squaro="square" />
        <Square value={squares[6][5]} onSquareClick={() => handleClick(6,5)} squaro="squarer" />
        <Square value={squares[6][6]} onSquareClick={() => handleClick(6,6)} squaro="square" />
        <Square value={squares[6][7]} onSquareClick={() => handleClick(6,7)} squaro="squarer" />
      </div>
      <div className="board-row">
        <Square value={squares[7][0]} onSquareClick={() => handleClick(7,0)} squaro="squarer" />
        <Square value={squares[7][1]} onSquareClick={() => handleClick(7,1)} squaro="square" />
        <Square value={squares[7][2]} onSquareClick={() => handleClick(7,2)} squaro="squarer" />
        <Square value={squares[7][3]} onSquareClick={() => handleClick(7,3)} squaro="square" />
        <Square value={squares[7][4]} onSquareClick={() => handleClick(7,4)} squaro="squarer" />
        <Square value={squares[7][5]} onSquareClick={() => handleClick(7,5)} squaro="square" />
        <Square value={squares[7][6]} onSquareClick={() => handleClick(7,6)} squaro="squarer" />
        <Square value={squares[7][7]} onSquareClick={() => handleClick(7,7)} squaro="square" />
      </div>
    </>
  );
}
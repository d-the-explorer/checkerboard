import { useState } from 'react';
var matrix = [
["c", "", "c", "", "c", "", "c", ""],
["", "c", "", "c", "", "c", "", "c"], 
["", "", "", "", "", "", "", ""],     
["", "", "", "", "", "", "", ""],     
["", "", "", "", "", "", "", ""],     
["", "c", "", "c", "", "c", "", "c"], 
["", "", "", "", "", "", "", ""],    
["", "c", "", "c", "", "c", "", "c"]
];

function Square({ value, onSquareClick, squaro }) {
  return (

<button className={squaro} onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  console.log(squares);
  console.log("Does it work?" + squares[0][1]);
  function handleClick(i) {
  /*  if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    //nextSquares[i] = xIsNext ? 'X' : 'O';
    
    onPlay(nextSquares);*/
  alert('beenClicked'+ i)
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0][0]} onSquareClick={() => handleClick(0)} squaro="square" />
        <Square value={squares[0][1]} onSquareClick={() => handleClick(1)} squaro="squarer" />
        <Square value={squares[0][2]} onSquareClick={() => handleClick(2)} squaro="square" />
        <Square value={squares[0][3]} onSquareClick={() => handleClick(3)} squaro="squarer" />
        <Square value={squares[0][4]} onSquareClick={() => handleClick(4)} squaro="square" />
        <Square value={squares[0][5]} onSquareClick={() => handleClick(5)} squaro="squarer" />
        <Square value={squares[0][6]} onSquareClick={() => handleClick(6)} squaro="square" />
        <Square value={squares[0][7]} onSquareClick={() => handleClick(7)} squaro="squarer" />
      </div>
      <div className="board-row">
        <Square value={squares[1][0]} onSquareClick={() => handleClick(0)} squaro="squarer" />
        <Square value={squares[1][1]} onSquareClick={() => handleClick(1)} squaro="square" />
        <Square value={squares[1][2]} onSquareClick={() => handleClick(2)} squaro="squarer" />
        <Square value={squares[1][3]} onSquareClick={() => handleClick(3)} squaro="square" />
        <Square value={squares[1][4]} onSquareClick={() => handleClick(4)} squaro="squarer" />
        <Square value={squares[1][5]} onSquareClick={() => handleClick(5)} squaro="square" />
        <Square value={squares[1][6]} onSquareClick={() => handleClick(6)} squaro="squarer" />
        <Square value={squares[1][7]} onSquareClick={() => handleClick(7)} squaro="square" />
      </div>
      <div className="board-row">
        <Square value={squares[2][0]} onSquareClick={() => handleClick(0)} squaro="square" />
        <Square value={squares[2][1]} onSquareClick={() => handleClick(1)} squaro="squarer" />
        <Square value={squares[2][2]} onSquareClick={() => handleClick(2)} squaro="square" />
        <Square value={squares[2][3]} onSquareClick={() => handleClick(3)} squaro="squarer" />
        <Square value={squares[2][4]} onSquareClick={() => handleClick(4)} squaro="square" />
        <Square value={squares[2][5]} onSquareClick={() => handleClick(5)} squaro="squarer" />
        <Square value={squares[2][6]} onSquareClick={() => handleClick(6)} squaro="square" />
        <Square value={squares[2][7]} onSquareClick={() => handleClick(7)} squaro="squarer" />
      </div>
            <div className="board-row">
        <Square value={squares[3][0]} onSquareClick={() => handleClick(0)} squaro="squarer" />
        <Square value={squares[3][1]} onSquareClick={() => handleClick(1)} squaro="square" />
        <Square value={squares[3][2]} onSquareClick={() => handleClick(2)} squaro="squarer" />
        <Square value={squares[3][3]} onSquareClick={() => handleClick(3)} squaro="square" />
        <Square value={squares[3][4]} onSquareClick={() => handleClick(4)} squaro="squarer" />
        <Square value={squares[3][5]} onSquareClick={() => handleClick(5)} squaro="square" />
        <Square value={squares[3][6]} onSquareClick={() => handleClick(6)} squaro="squarer" />
        <Square value={squares[3][7]} onSquareClick={() => handleClick(7)} squaro="square" />
        </div>
            <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} squaro="square" />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} squaro="squarer" />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} squaro="square" />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} squaro="squarer" />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} squaro="square" />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} squaro="squarer" />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} squaro="square" />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} squaro="squarer" />
      </div>
            <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} squaro="squarer" />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} squaro="square" />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} squaro="squarer" />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} squaro="square" />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} squaro="squarer" />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} squaro="square" />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} squaro="squarer" />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} squaro="square" />
      </div>
            <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} squaro="square" />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} squaro="squarer" />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} squaro="square" />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} squaro="squarer" />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} squaro="square" />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} squaro="squarer" />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} squaro="square" />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} squaro="squarer" />
      </div>
            <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} squaro="squarer" />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} squaro="square" />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} squaro="squarer" />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} squaro="square" />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} squaro="squarer" />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} squaro="square" />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} squaro="squarer" />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} squaro="square" />
        </div>

    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState(matrix);
  console.log("history: " + history);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  // const currentSquares = history[currentMove];
  // console.log("currentSquares: " + currentSquares);

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={history} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

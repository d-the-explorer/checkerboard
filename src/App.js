import { useState } from 'react';
import Board from './Board';
import Square from './Square';

const matrix = [
  ["c", "", "c", "", "c", "", "c", ""],
  ["", "c", "", "c", "", "c", "", "c"],
  ["c", "", "c", "", "c", "", "c", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "🟡", "", "🟡", "", "🟡", "", "🟡"],
  ["🟡", "", "🟡", "", "🟡", "", "🟡", ""],
  ["", "🟡", "", "🟡", "", "🟡", "", "🟡"],
];




export default function Game() {
  const [history, setHistory] = useState([matrix]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;

  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    const description = move > 0 ? `Go to move #${move}` : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export function calculateWinner(squares) {
  if (!Array.isArray(squares) || squares.length === 0) {
    return null;
  }

  if (Array.isArray(squares[0])) {
    const rows = squares.length;
    const cols = squares[0].length;

    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        const value = squares[row][col];
        if (!value) {
          continue;
        }

        if (col <= cols - 3 && value === squares[row][col + 1] && value === squares[row][col + 2]) {
          return value;
        }

        if (row <= rows - 3 && value === squares[row + 1][col] && value === squares[row + 2][col]) {
          return value;
        }

        if (row <= rows - 3 && col <= cols - 3 && value === squares[row + 1][col + 1] && value === squares[row + 2][col + 2]) {
          return value;
        }

        if (row <= rows - 3 && col >= 2 && value === squares[row + 1][col - 1] && value === squares[row + 2][col - 2]) {
          return value;
        }
      }
    }

    return null;
  }

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

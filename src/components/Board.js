import React, { useState } from 'react';
import Square from './Square';

function Board() {
  // Setting the state for the board. Filling 9 positions in array with a value of none
  const [board, setBoard] = useState(Array(9).fill(null));
  // Setting a bool if the next value to be set is X
  const [isXNext, setIsXNext] = useState(false);

  const handleSquareClick = position => {
    if (board[position]) return;
    setBoard(preState => {
      return preState.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }
        return square;
      });
    });
    setIsXNext(prev => !prev);
  };

  const renderSquare = position => {
    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;

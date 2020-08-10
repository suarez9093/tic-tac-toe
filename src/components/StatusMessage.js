import React from 'react';

function StatusMessage({ winner, current }) {
  const noMovesNext = current.board.every(el => el !== null);
  return (
    <h2>
      {winner && winner`Winner is ${winner}`}
      {!winner &&
        !noMovesNext &&
        `Next player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMovesNext && 'X and O Tied'}
    </h2>
  );
}

export default StatusMessage;

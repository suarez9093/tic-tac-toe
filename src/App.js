import React, { useState } from 'react';
import Board from './components/Board';
import './styles/root.scss';
import { calculateWinner } from './helpers';

const App = () => {
  // Setting the state for the board. Filling 9 positions in array with a value of none
  const [board, setBoard] = useState(Array(9).fill(null));
  // Setting a bool if the next value to be set is X
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isXNext ? 'X' : 'O'}`;
  console.log(winner);
  const handleSquareClick = position => {
    console.log(board);
    // If there is already an item in the array at this specific postion then return
    if (board[position] || winner) return;
    // Set Board state passing in previous State
    setBoard(preState => {
      // Map, (create a new array, calling a function on every element on item) over every item in the array, square and position (array index) array.map((currentValue, index, arr) => {})
      return preState.map((square, pos) => {
        // If index and position match
        if (pos === position) {
          // If bool bal is true return X else O
          return isXNext ? 'X' : 'O';
        }
        // return currentVal
        return square;
      });
    });
    // Set the bool to the reverse of what it was
    setIsXNext(prev => !prev);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;

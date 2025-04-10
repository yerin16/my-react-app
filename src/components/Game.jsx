import React from 'react'
import Board from './Board'

function Game() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <ol>{/*TODO*/}</ol>
        </div>
      </div>
    );
  }

export default Game
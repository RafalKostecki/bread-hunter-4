import React from 'react';

//Import styles
import './assets/styles/index.scss';

//Import other components
import Board from './components/board/Board';
import ConfigPanel from './components/ControlPanel';


const Game = () => {
  return (
    <main className="game">
      <div className="game__wrapper">
        <ConfigPanel />
        <Board />
      </div>
    </main>
  )
}


export default Game;

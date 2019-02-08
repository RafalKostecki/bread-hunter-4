import React from 'react';

//Import styles
import './assets/styles/index.scss';

//Import other components
import Board from './components/board/Board';
import ConfigPanel from './components/configPanel/ControlPanel';
import GameInfo from './components/gameInfo/GameInfo';


const Game = () => {
  return (
    <main className="game">
      <div className="game__wrapper">
        <ConfigPanel />
        <Board />
        <GameInfo />
      </div>
    </main>
  )
}


export default Game;

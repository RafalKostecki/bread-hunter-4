import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/rootReducer';

//Import styles
import './assets/styles/index.scss';

//Import other components
import Board from './components/board/Board';
import ConfigPanel from './components/controlPanel/ControlPanel';
import GameInfo from './components/gameInfo/GameInfo';


export const store = createStore(rootReducer);

export const Game = () => {
  return (
    <Provider store={store}>
      <main className="game">
        <div className="game__wrapper">
          <ConfigPanel />
          <Board />
          <GameInfo />
        </div>
      </main>
    </Provider>
  )
}

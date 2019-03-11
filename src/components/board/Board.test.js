import React from 'react';
import ReactDOM from 'react-dom';
import { Board } from './Board';
import { store } from '../../Game';


it('Board component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Board 
      boardPosition={{
        x: 10,
        y: 1
      }}
      isRunGame
    />, div);
  ReactDOM.unmountComponentAtNode(div);
});

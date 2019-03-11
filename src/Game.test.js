import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import { store } from '../../Game';


it('Game component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game store={store}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

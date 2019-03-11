import React from 'react';
import ReactDOM from 'react-dom';
import Player from './Player';


it('Player component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Player />, div);
  ReactDOM.unmountComponentAtNode(div);
});

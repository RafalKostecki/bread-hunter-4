import React from 'react';
import ReactDOM from 'react-dom';
import GameInfo from '../../../components/gameInfo/GameInfo';


it('GameInfo component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GameInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});

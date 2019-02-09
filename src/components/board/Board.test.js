import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';


it('Board component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Board />, div);
  ReactDOM.unmountComponentAtNode(div);
});

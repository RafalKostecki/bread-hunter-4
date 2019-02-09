import React from 'react';
import ReactDOM from 'react-dom';
import BoardField from './Board';


it('BoardField component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BoardField />, div);
  ReactDOM.unmountComponentAtNode(div);
});

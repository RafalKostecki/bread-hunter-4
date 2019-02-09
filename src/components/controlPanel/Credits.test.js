import React from 'react';
import ReactDOM from 'react-dom';
import Credits from './Credits';


it('Credits component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Credits />, div);
  ReactDOM.unmountComponentAtNode(div);
});

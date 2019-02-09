import React from 'react';
import ReactDOM from 'react-dom';
import ControlPanel from './ControlPanel';


it('ControlPanel component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ControlPanel />, div);
  ReactDOM.unmountComponentAtNode(div);
});

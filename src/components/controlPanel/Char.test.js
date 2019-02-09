import React from 'react';
import ReactDOM from 'react-dom';
import Char from './Char';


it('Char component renders without crashing', () => {
  const div = document.createElement('div');
  const exampleCharData = {
      name: "Forrest Gump",
      pic: "picString"
  }
  ReactDOM.render(<Char name={exampleCharData.name} pic={exampleCharData.pic} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

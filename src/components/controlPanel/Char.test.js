import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
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

// it('Char chooseChar function', () => {
//   const char = {
//     name: "ExampleChar",
//     pic: "examplePathPic",
//   }
//   const div = document.createElement('div');
//   ReactDOM.render(<Char name={char.name} pic={char.pic} />, div);

//   const charDOM = div.querySelector('span');
//   expect(charDOM.textContent).toBe('ExampleChar');

//   act(() => {
//     div.dispatchEvent(new MouseEvent('click'));
//   });

//   expect(charDOM.textContent).toBe('selected');
// });

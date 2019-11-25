import React from 'react';
import ReactDOM from 'react-dom';
import ComponentSelector from './ComponentSelector';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ComponentSelector/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import LibraryFilters from './Filters';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LibraryFilters/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

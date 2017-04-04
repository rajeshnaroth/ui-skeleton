import React from 'react';
import ReactDOM from 'react-dom';

import Page1 from '../../../js/components/page1/Page1';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Page1 />, div);
});

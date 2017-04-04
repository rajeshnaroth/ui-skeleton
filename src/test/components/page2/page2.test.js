import React from 'react';
import ReactDOM from 'react-dom';

import Page2 from '../../../js/components/page2/Page2';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Page2 />, div);
});

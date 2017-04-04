import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';

import Header from '../../../js/components/common/Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <IntlProvider locale="en"><Header /></IntlProvider>, 
    div);
});

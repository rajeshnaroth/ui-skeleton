import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';

import configureStore from '../js/utils/configureStore';
import App from '../js/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IntlProvider locale="en"><App store={configureStore()}/></IntlProvider>, div);
});

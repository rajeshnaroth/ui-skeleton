import React from 'react';
import ReactDOM from 'react-dom';

import { IntlProvider } from 'react-intl';

import configureStore from './utils/configureStore';
import getLocaleTransition from './utils/getLocaleTranslatons';

// import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import '../css/index.css';

const store = configureStore();

getLocaleTransition((messages, languageWithoutRegionCode) => {
  ReactDOM.render(
      <IntlProvider locale={languageWithoutRegionCode} messages={messages}>
        <App store={store}/>
      </IntlProvider>,
      document.getElementById('root')
  ); 
});
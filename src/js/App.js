import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/home/Home';
import Page1 from './components/page1/Page1';
import Page2 from './components/page2/Page2';

import '../sass/app.scss';

const App = ({ store }) => (
    <Provider store={ store }>
        <Router>
            <div className="app container-fluid">
                <div className="row">
                    <Route exact path="/" store={ store } component={ Home } />
                    <Route path="/1" store={ store } component={ Page1 } />
                    <Route path="/2" store={ store } component={ Page2 } />
                </div>
                <Footer />
            </div>
        </Router>
    </Provider>
)

export default App;
import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from './components/common/Footer';
import LongPageContainer from './components/longpage/LongPageContainer';
import Page1 from './components/page1/Page1';
import Page2 from './components/page2/Page2';

import '../sass/app.scss';
const App = React.createClass({
    
    render() {
        return (
            <Provider store={ this.props.store }>
                <Router>
                    <div className="app">
                        <div>
                            <Route exact path="/" store={ this.props.store } component={ LongPageContainer } />
                            <Route path="/1" store={ this.props.store } component={ Page1 } />
                            <Route path="/2" store={ this.props.store } component={ Page2 } />
                        </div>
                        <Footer />
                    </div>
                </Router>
            </Provider>
        )
    }
})

export default App;
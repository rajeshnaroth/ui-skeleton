import React from 'react';
//import ReactDOM from 'react-dom'
// import { FormattedMessage } from 'react-intl';
import _ from 'lodash';
import HeaderContainer from '../common/HeaderContainer';
import HomePanel from './HomePanel';
import WhoPanel from './WhoPanel';
import WhatPanel from './WhatPanel';
import WhyPanel from './WhyPanel';
import WhoForPanel from './WhoForPanel';
import ContactPanel from './ContactPanel';

import { slowScrollTo } from '../../utils/domutils';

const LongPage = React.createClass({
    propTypes: {
        currentPanel: React.PropTypes.string
    },
    getInitialState() {
        this.panels = {};
        return {
            style: { scrollTop:0 },
            showHeader: true,
            resized: false
        }
    },
    showHeader(state) {
        this.setState(state);
    },
    scroll(ev, tgt) {
        if (this.lastScrollY !== undefined) {
            if (window.scrollY < this.lastScrollY || window.scrollY < 300) {
                this.props.setHeaderVisibility(true)
            } else {
                this.props.setHeaderVisibility(false)
            }
        }
        this.lastScrollY = window.scrollY;
    },
    resize(ev, tgt) {
        this.forceUpdate();        
    },
    componentDidMount() {
        window.addEventListener('scroll', this.scroll);        
        window.addEventListener('resize', this.resize);        
    },
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll);
        window.removeEventListener('resize', this.resize);
    },
    componentWillReceiveProps(nextProps) {
        const yPos = this.panels[nextProps.currentPanel];
        console.log("LongPage.js componentWillReceiveProps: ", window.scrollY, yPos);
                
        if ( window.scrollY !== yPos ) {
            slowScrollTo(window.scrollY, yPos).then(() => {});
        }
    },
    shouldComponentUpdate(nextProps, nextState) {
        console.log("LongPage.js shouldComponentUpdate");
        return false;
    },
    render() {
        var setDomElement = (panelId) => (domElem) => { 
            this.panels[panelId] = domElem.getBoundingClientRect().top + window.scrollY; 
        };
                
        return (
            <div>
                <HeaderContainer />
                <div className="long-page">
                    <a name="home"></a>
                    <section ref={ setDomElement('home') }>
                        <HomePanel />
                    </section>
                    
                    <a name="what"></a>
                    <section ref={ setDomElement('what') }> 
                        <WhatPanel />
                    </section>
                    
                    <a name="who"></a>
                    <section ref={ setDomElement('who') } >
                        <WhoPanel />
                    </section>

                    <a name="why"></a>
                    <section ref={ setDomElement('why') }> 
                        <WhyPanel />
                    </section>

                    <a name="who-for"></a>
                    <section ref={ setDomElement('whofor') }> 
                        <WhoForPanel />
                    </section>

                    <a name="contact"></a>
                    <section ref={ setDomElement('contact') }> 
                        <ContactPanel />
                    </section>
                </div>
            </div>
        )
    }
});

export default LongPage;
/*

                    */

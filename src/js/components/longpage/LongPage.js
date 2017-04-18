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
        currentPanel: React.PropTypes.object
    },
    getInitialState() {
        this.panels = {};
        return {
            style: { scrollTop:0 },
            showHeader: true,
            resized: false
        }
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
        console.log("LongPage.js: resize ");
                              
    },
    componentDidMount() {
        this.scrollerCB = _.throttle(this.scroll, 300);
        this.resizeCB = _.throttle(this.resize, 500);
        window.addEventListener('scroll', this.scrollerCB);        
        window.addEventListener('resize', this.resizeCB);        
        window.addEventListener('orientationchange', this.resizeCB);        
    },
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollCB);
        window.removeEventListener('resize', this.resizeCB);
        window.addEventListener('orientationchange', this.resizeCB); 
    },
    componentWillReceiveProps(nextProps) {
        const currentPanelId = nextProps.currentPanel.panelId;
        const yPos = this.panels[currentPanelId];
                
        if ( window.scrollY !== yPos ) {
            slowScrollTo(window.scrollY, yPos).then(() => {});
        }
    },
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    },
    render() {
        var setDomElement = (panelId) => (domElem) => { 
            if (domElem) {
                this.panels[panelId] = domElem.getBoundingClientRect().top + window.scrollY; 
            }
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

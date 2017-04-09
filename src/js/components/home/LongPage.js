import React from 'react';
//import ReactDOM from 'react-dom'
import { FormattedMessage } from 'react-intl';
import _ from 'lodash';
import HeaderContainer from '../common/HeaderContainer';
import { slowScrollTo } from '../../utils/domutils';

let lastScrollY = null;
const LongPage = React.createClass({
    getInitialState() {
        return {
            style: { scrollTop:0 },
            showHeader: true
        }
    },
    showHeader(state) {
        this.setState(state);
    },
    scroll(ev, tgt) {
            if (lastScrollY !== null) {
            
            if (window.scrollY < lastScrollY || window.scrollY < 600) {
                this.props.setHeaderVisibility(true)
            } else {
                this.props.setHeaderVisibility(false)
            }
        }
        lastScrollY = window.scrollY;
    },
    componentDidMount() {
        window.addEventListener('scroll', this.scroll);        
    },
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll);
    },
    setPanel(panelId, domElem) {
        let panelVal = {};
        panelVal[panelId] = domElem.getBoundingClientRect().top + window.scrollY;
        console.log(panelId, panelVal[panelId], domElem.getBoundingClientRect());
        this.setState(panelVal);
    },
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentPanel && this.state[nextProps.currentPanel]) {
            const yPos = this.state[nextProps.currentPanel];
            slowScrollTo(window.scrollY, yPos).then(() => {});
            //ReactDOM.findDOMNode(this.state['home']).scrollTo(0, boundingBox.top);
        }
    },
    shouldComponentUpdate(newProps, newState) {
        return false;
    },
    render() {
        var setDomElement = (panelId) => (domElem) => { this.setPanel(panelId, domElem); };
        return (
            <div>
                <HeaderContainer />
                <div className="long-page" ref={setDomElement('home')}>
                    <section className="splash pagelet">
                        <div className="mission-statement">
                            <p>
                                <FormattedMessage id="home.missionStatement" defaultMessage={``} />
                            </p>
                        </div>
                    </section>
                    <a name="who"></a>
                    <section className="who-we-are pagelet" ref={setDomElement('who')}> 
                        <h4>Who We are</h4>
                    </section>
                    <a name="what"></a>
                    <section className="what-we-do pagelet" ref={setDomElement('what')}> 
                        <h4>What we do</h4>
                    </section>
                    <a name="why"></a>
                    <section className="why-we-do-it pagelet" ref={setDomElement('why')}> 
                        <h4>Why we do it</h4>
                    </section>
                    <a name="who-for"></a>
                    <section className="who-we-do-it-for pagelet" ref={setDomElement('whofor')}> 
                        <h4>Who is it for</h4>
                    </section>
                    <a name="contact"></a>
                    <section className="contact pagelet" ref={setDomElement('contact')}> 
                        <h4>Contact</h4>
                    </section>
                </div>
            </div>
        )
    }
});

export default LongPage;

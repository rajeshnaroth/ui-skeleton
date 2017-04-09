import React from 'react';
import { FormattedMessage } from 'react-intl';
import Choreo from 'choreojs';

//import './header.scss';
//
// Header has multiple states
// Small with hamburger menu
// medium - large: No hamburger menu but navigation links

// slideOut: when user scrolls below a certain threshold
// slideIn: slides in when user scrolls up a bit
let showMenu = false;
const Header = React.createClass({
    getInitialState() { 
        return {
            headerStyle:{},
            navStyle:{ display:'none', opacity:0 }
        }
    },
    showNav() {
        let seq = Choreo.create();

        seq.add(() => {
            this.setState({
                navStyle:{ display:'block', opacity:0 }
            });
        });
        seq.add(() => {
            this.setState({
                navStyle:{ opacity:1 }
            });
        });
        seq.start();
    },
    hideNav() {
        let seq = Choreo.create();
        showMenu = false;
        seq.add(() => {
            this.setState({
                navStyle:{ opacity:0 }
            });
        });
        seq.wait(500);
        seq.add(() => {
            this.setState({
            navStyle:{ opacity:0, display:'none' }
            });
        });
        seq.start();
    },
    toggleNav() {
        showMenu = !showMenu;
        if (showMenu) {
            this.showNav();
        } else {
            this.hideNav();
        }
    },
    componentWillReceiveProps(nextProps) {
        if (nextProps.showHeader !== this.props.showHeader) {
            if (nextProps.showHeader) {
                this.setState({
                    headerStyle:{ opacity:1 }
                });
            } else {
                this.setState({
                    headerStyle:{ opacity:0 }
                });
            }
        }
    },
    render() { 
        const hamburgerMenuIconClass = showMenu ? 'fa fa-times' : 'fa fa-bars';
        const goToPanel = (panelId) => (e) => { 
            this.props.setPanelTo(panelId);
        }
        return (
            <header style={this.state.headerStyle} >
                <section>
                    <span className="hamburger-icon" onClick={this.toggleNav}>
                        <i className={hamburgerMenuIconClass} aria-hidden="true"></i> 
                    </span>
                    <h1>
                        <FormattedMessage id="app.name" defaultMessage={`Logo/Title`} />
                    </h1>
                </section>
                <nav style={this.state.navStyle}>
                    <ul onClick={this.hideNav}>
                        <li><span onClick={goToPanel('who')}>Who we are</span></li>
                        <li><span onClick={goToPanel('what')}>What we do</span></li>
                        <li><span onClick={goToPanel('why')}>Why we do it</span></li>
                        <li><span onClick={goToPanel('whofor')}>Who is this for</span></li>
                        <li><span onClick={goToPanel('contact')}>Contact us</span></li>
                    </ul>
                </nav>
            </header>
        )
    }
});

export default Header;

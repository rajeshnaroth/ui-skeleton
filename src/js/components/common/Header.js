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
const Header = React.createClass({
    propTypes: {
        showHeader: React.PropTypes.bool
    },
    getInitialState() { 
        this.showMenu = false;
        return {
            headerStyleClass:{},
            navStyleClass:"absent invisible"//"{ display:'none', opacity:0 }"
        }
    },
    showNav() {
        if (this.seq1) {
            this.seq1.cancel();
        }
        this.seq1 = Choreo.create();

        this.seq1.add(() => {
            this.setState({
                navStyleClass:"present invisible" //{ opacity:0, display:'block' }
            });
        });
        this.seq1.add(() => {
            this.setState({
                navStyleClass:"present visible" //{ display:'block', opacity:1 }
            });
        });
        this.seq1.start();
    },
    hideNav() {
        if (this.seq2) {
            this.seq2.cancel();
        }
        this.seq2 = Choreo.create();
        this.showMenu = false;
        this.seq2.add(() => {
            this.setState({
                navStyleClass: "invisible"//{ opacity:0 }
            });
        });
        this.seq2.wait(500);
        this.seq2.add(() => {
            this.setState({
            navStyleClass: "invisible absent"//{ opacity:0, display:'none' }
            });
        });
        this.seq2.start();
    },
    toggleNav() {
        this.showMenu = !this.showMenu;
        if (this.showMenu) {
            this.showNav();
        } else {
            this.hideNav();
        }
    },
    componentWillReceiveProps(nextProps) {
        if (nextProps.showHeader !== this.props.showHeader) {
            if (nextProps.showHeader) {
                this.setState({
                    headerStyleClass: 'visible' //{ opacity:0.9 }
                });
            } else {
                this.setState({
                    headerStyleClass: 'invisible' //{ opacity:0 }
                });
            }
        }
    },
    render() { 
        const hamburgerMenuIconClass = this.showMenu ? 'fa fa-times' : 'fa fa-bars';
        const goToPanel = (panelId) => (e) => { 
            this.props.setPanelTo(panelId);
        }
        return (
            <header className={this.state.headerStyleClass} >
                <section>
                    <span className="hamburger-icon" onClick={this.toggleNav}>
                        <i className={hamburgerMenuIconClass} aria-hidden="true"></i> 
                    </span>
                    <h1>
                        <FormattedMessage id="home.name" defaultMessage={`Logo/Title`} />
                    </h1>
                </section>
                <nav className={this.state.navStyleClass}>
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

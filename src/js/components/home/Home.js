import React from 'react';
import { FormattedMessage } from 'react-intl';

const Home = (props) => (
    <div className="home">
        <section className="navigation">
            <ul className="navigation-links">
                <li><a href="#who">Who we are</a></li>
                <li><a href="#what">What we do</a></li>
                <li><a href="#why">Why we do it</a></li>
                <li><a href="#who-for">Who is it for</a></li>
                <li><a href="#who-for">Sign-In</a></li>
            </ul>
        </section>
        <section className="splash pagelet">
            <h1>
                <FormattedMessage id="home.name" defaultMessage={`Title`} />
            </h1>
            <div className="mission-statement">
                <p>
                    <FormattedMessage id="home.missionStatement" defaultMessage={``} />
                </p>
            </div>
        </section>
        <a name="who"></a>
        <section className="who-we-are pagelet"> 
            <h4>Who We are</h4>
        </section>
        <a name="what"></a>
        <section className="what-we-do pagelet"> 
            <h4>What we do</h4>
        </section>
        <a name="why"></a>
        <section className="why-we-do-it pagelet"> 
            <h4>Why we do it</h4>
        </section>
        <a name="who-for"></a>
        <section className="who-we-do-it-for pagelet"> 
            <h4>Who is it for</h4>
        </section>
    </div>
);

export default Home;

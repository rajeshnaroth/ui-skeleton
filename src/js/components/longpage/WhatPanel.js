import React from 'react';
import { FormattedMessage } from 'react-intl';
import educationImage from '../../../images/logo.svg';
import farmImage from '../../../images/logo.svg';
import dataImage from '../../../images/logo.svg';

const WhatPanel = (props) => (
    <div className="what-we-do pagelet"> 
        <div className="grid center title">
            <h4 className="cell">
                <FormattedMessage id="what.title" />
            </h4>
        </div>

        <div className="grid gutters center">
            <article className="cell statement">
                <p>
                    <FormattedMessage id="what.description" />
                </p>
            </article>
        </div>
        <div className="grid">
            <section className="cell cell-md-full bulletbox">
                <div className="bullets">
                    <h5>
                        <FormattedMessage id="what.edu" />
                    </h5>
                    <div className="figure text-center">
                        <img className="thumb" src={educationImage} alt="educationImage"/>
                        <ul>
                            <li><FormattedMessage id="what.edu.1" /></li>
                            <li><FormattedMessage id="what.edu.2" /></li>
                            <li><FormattedMessage id="what.edu.3" /></li>
                            <li><FormattedMessage id="what.edu.4" /></li>
                            <li><FormattedMessage id="what.edu.5" /></li>
                            <li><FormattedMessage id="what.edu.6" /></li>
                            <li><FormattedMessage id="what.edu.7" /></li>
                        </ul>
                    </div>
                </div>   
            </section>
            
            <section className="cell cell-md-full bulletbox">
                <div className="bullets">
                    <h5>
                        <FormattedMessage id="what.farm" />
                    </h5>
                    <div className="figure text-center">
                        <img className="thumb" src={farmImage} alt="farmImage"/>
                        <ul>
                            <li><FormattedMessage id="what.farm.1" /></li>
                            <li><FormattedMessage id="what.farm.2" /></li>
                            <li><FormattedMessage id="what.farm.3" /></li>
                            <li><FormattedMessage id="what.farm.4" /></li>
                            <li><FormattedMessage id="what.farm.5" /></li>
                            <li><FormattedMessage id="what.farm.6" /></li>
                            <li><FormattedMessage id="what.farm.7" /></li>
                            <li><FormattedMessage id="what.farm.8" /></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="cell cell-md-full bulletbox">
                <div className="bullets">
                    <h5>
                        <FormattedMessage id="what.data" />
                    </h5>
                    <div className="figure text-center">
                        <img className="thumb" src={dataImage} alt="dataImage"/>
                        <ul>
                            <li><FormattedMessage id="what.data.1" /></li>
                            <li><FormattedMessage id="what.data.2" /></li>
                            <li><FormattedMessage id="what.data.3" /></li>
                            <li><FormattedMessage id="what.data.4" /></li>
                            <li><FormattedMessage id="what.data.5" /></li>
                            <li><FormattedMessage id="what.data.6" /></li>
                            <li><FormattedMessage id="what.data.7" /></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
);

export default WhatPanel;
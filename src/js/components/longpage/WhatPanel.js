import React from 'react';
import { FormattedMessage } from 'react-intl';

const WhatPanel = (props) => (
    <div className="what-we-do pagelet container-fluid"> 
        <div className="row title">
            <h4 className="col align-self-end">
                <FormattedMessage id="what.title" />
            </h4>
        </div>

        <div className="d-flex align-items-center justify-content-center">
            <article className="statement">
                <FormattedMessage id="what.description" />
            </article>
        </div>
        <div className="row bulletbox">
            <section className="col col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="bullets">
                    <h5>
                        <FormattedMessage id="what.edu" />
                    </h5>
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
            </section>
            
            <section className="col col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="bullets">
                    <h5>
                        <FormattedMessage id="what.farm" />
                    </h5>
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
            </section>

            <section className="col col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="bullets">
                    <h5>
                        <FormattedMessage id="what.data" />
                    </h5>
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
            </section>
        </div>
    </div>
);

export default WhatPanel;
/*

        */
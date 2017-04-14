import React from 'react';
import { FormattedMessage } from 'react-intl';

const WhoForPanel = (props) => (
    <div className="who-we-do-it-for pagelet container-fluid"> 
        <div className="row title">
            <h4 className="col align-self-end">
                <FormattedMessage id="whofor.title" />
            </h4>
        </div>
        <div className="row bulletbox">
            <article className="bulletbox col col-12 col-sm-12 col-md-6">
                <h5>
                    <FormattedMessage id="whofor.item1" />
                </h5>
                <p>
                    <FormattedMessage id="whofor.item1.text" />
                </p>
            </article>
            <article className="bulletbox col col-12 col-sm-12 col-md-6">
                <h5>
                    <FormattedMessage id="whofor.item2" />
                </h5>
                <p>
                    <FormattedMessage id="whofor.item2.text" />
                </p>
            </article>
        </div>
    </div>
);

export default WhoForPanel;

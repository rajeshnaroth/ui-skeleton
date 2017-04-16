import React from 'react';
import { FormattedMessage } from 'react-intl';

const WhoForPanel = (props) => (
    <div className="who-we-do-it-for pagelet"> 
        <div className="grid center title">
            <h4 className="cell">
                <FormattedMessage id="whofor.title" />
            </h4>
        </div>
        <div className="grid bulletbox">
            <article className="bulletbox cell cell-sm-full">
                <h5>
                    <FormattedMessage id="whofor.item1" />
                </h5>
                <p>
                    <FormattedMessage id="whofor.item1.text" />
                </p>
            </article>
            <article className="bulletbox cell cell-sm-full">
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

import React from 'react';
import { FormattedMessage } from 'react-intl';

const WhyPanel = (props) => (
    <div className="why-we-do-it pagelet"> 
        <div className="grid title">
            <h4 className="cell">
                <FormattedMessage id="why.title" />
            </h4>
        </div>
        <div className="grid bulletbox">
            <article className="bulletbox cell cell-sm-full">
                <h5>
                    <FormattedMessage id="why.item1" />
                </h5>
                <p>
                    <FormattedMessage id="why.item1.text" />
                </p>
            </article>
            <article className="bulletbox cell cell-sm-full">
                <h5>
                    <FormattedMessage id="why.item2" />
                </h5>
                <p>
                    <FormattedMessage id="why.item2.text" />
                </p>
            </article>
        </div>
    </div>
);

export default WhyPanel;

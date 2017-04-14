import React from 'react';
import { FormattedMessage } from 'react-intl';

const WhyPanel = (props) => (
    <div className="why-we-do-it pagelet container-fluid"> 
        <div className="row title">
            <h4 className="col align-self-end">
                <FormattedMessage id="why.title" />
            </h4>
        </div>
        <div className="row bulletbox">
            <article className="bulletbox col-12">
                <h5>
                    <FormattedMessage id="why.item1" />
                </h5>
                <p>
                    <FormattedMessage id="why.item1.text" />
                </p>
            </article>
            <article className="bulletbox col-12">
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

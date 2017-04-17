import React from 'react';
import { FormattedMessage } from 'react-intl';

const WhyPanel = (props) => (
    <div className="why-we-do-it pagelet"> 
        <div className="grid center title">
            <h4 className="cell">
                <FormattedMessage id="why.title" />
            </h4>
        </div>
        <div className="grid bulletbox">
            <div className="bulletbox cell cell-sm-full">
                <h5>
                    <FormattedMessage id="why.item1" />
                </h5>
                <div className="figure text-center">
                    <p>
                    <FormattedMessage id="why.item1.text" />
                    </p>
                </div>
            </div>
            <div className="bulletbox cell cell-sm-full">
                <h5>
                    <FormattedMessage id="why.item2" />
                </h5>
                <div className="figure text-center">
                    <p>
                        <FormattedMessage id="why.item2.text" />
                    </p>
                </div>
            </div>
        </div>
        
    </div>
);

export default WhyPanel;

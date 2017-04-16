import React from 'react';
import { FormattedMessage } from 'react-intl';

const HomePanel = (props) => (
    <div className="home pagelet"> 
        <div className="grid center banner">
        <h3 className="cell">
            <FormattedMessage id="home.tagline" defaultMessage={``} />
        </h3>
        </div>
        <div className="grid center statement">
            <article className="cell">
                <p>
                    <FormattedMessage id="home.description" defaultMessage={``} />
                </p>
            </article>
        </div>
    </div>
);

export default HomePanel;
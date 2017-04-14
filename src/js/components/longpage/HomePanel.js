import React from 'react';
import { FormattedMessage } from 'react-intl';

const HomePanel = (props) => (
    <div className="home pagelet"> 
        <div className="d-flex align-items-center justify-content-center banner">
        <h3>
            <FormattedMessage id="home.tagline" defaultMessage={``} />
        </h3>
        </div>
        <div className="d-flex align-items-center justify-content-center statement">
            <article className="">
                <p>
                    <FormattedMessage id="home.description" defaultMessage={``} />
                </p>
            </article>
        </div>
    </div>
);

export default HomePanel;
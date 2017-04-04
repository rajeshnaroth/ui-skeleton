import React from 'react';
import {FormattedMessage} from 'react-intl';
const Header = (props) => (
    <div className="app-header">       
            <h1>
                <FormattedMessage id="app.name" defaultMessage={`Logo/Title`} />
            </h1>
    </div>
);

export default Header;

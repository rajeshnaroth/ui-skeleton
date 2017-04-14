import React from 'react';
import { FormattedMessage } from 'react-intl';

const ContactPanel = (props) => (
    <div className="who-we-are pagelet container-fluid"> 
        <div className="row title">
            <h4 className="col align-self-end">
                <FormattedMessage id="contact.title" />
            </h4>
        </div>
        <section>
            <article>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
                ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </article>
            <p>
            </p>
        </section>
    </div>
);


export default ContactPanel;

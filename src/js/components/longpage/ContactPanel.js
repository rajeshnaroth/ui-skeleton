import React from 'react';
import { FormattedMessage } from 'react-intl';
import farmImage from '../../../images/cows.jpg';

const ContactPanel = (props) => (
    <div className="contact pagelet"> 
        <div className="grid center title">
            <h4 className="cell">
                <FormattedMessage id="contact.title" />
            </h4>
        </div>
        <div className="statement">
            <p>
                <FormattedMessage id="contact.description" />
            </p>
        </div>
        <div className="bulletbox">
            <article className="bulletbox cell cell-sm-full">
                <h5><FormattedMessage id="contact.farm.name" /></h5>
                <div className="info">
                    <div className="figure">
                        <img className="thumb" src={farmImage} alt="farm"/>
                        <address>
                            <p>
                                <FormattedMessage id="contact.farm.detail" />
                            </p>
                            <a href="http://www.mesquitefieldfarm.com" target="_new">www.mesquitefieldfarm.com</a>
                            <br/>
                            <a href="http://www.facebook.com/mesquitefieldfarm" target="_new">www.facebook.com/mesquitefieldfarm</a>
                        </address>
                    
                        <address>
                            <FormattedMessage id="contact.farm.emailContact" />
                            <p> doug@mesquitefieldfarm.com <br/> melissa@mesquitefieldfarm.com </p> 
                        </address>
                    </div>
                </div>
            </article>
            
        </div>
    </div>
);


export default ContactPanel;

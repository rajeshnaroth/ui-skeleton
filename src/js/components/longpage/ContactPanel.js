import React from 'react';
import { FormattedMessage } from 'react-intl';
import farmImage from '../../../images/logo.svg';

const ContactPanel = (props) => (
    <div className="contact pagelet container-fluid"> 
        <div className="row title">
            <h4 className="col align-self-end">
                <FormattedMessage id="contact.title" />
            </h4>
        </div>
        <article className="statement">
            <p>
                <FormattedMessage id="contact.description" />
            </p>
        
            <h5><FormattedMessage id="contact.farm.name" /></h5>
            <div className="row">
                <figure className="figure col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <img className="founder figure-img img-fluid" src={farmImage} alt="farmname"/>
                </figure>
                <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <address>
                        <FormattedMessage id="contact.farm.detail" />
                        <br/>
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
);


export default ContactPanel;

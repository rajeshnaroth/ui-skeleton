import React from 'react';
import { FormattedMessage } from 'react-intl';
import personallyImage from '../../../images/one-pepper-c.jpg';
import biggerPictureImage from '../../../images/lot-of-peppers-c.jpg';

const WhyPanel = (props) => (
    <div className="why-we-do-it pagelet"> 
        <div className="center title">
            <h4>
                <FormattedMessage id="why.title" />
            </h4>
        </div>
        <div className="grid bulletbox">
            <div className="bulletbox cell cell-sm-full">
                <h5>
                    <FormattedMessage id="why.item1" />
                </h5>
                <div className="figure">
                    <div className="holder">
                        <img className="thumb" src={personallyImage} alt="Personally"/>
                    </div>
                    <p>
                    <FormattedMessage id="why.item1.text" />
                    </p>
                </div>
            </div>
            <div className="bulletbox cell cell-sm-full">
                <h5>
                    <FormattedMessage id="why.item2" />
                </h5>
                <div className="figure">
                    <div className="holder">
                        <img className="thumb" src={biggerPictureImage} alt="Bigger Picture"/>
                    </div>
                    <p>
                        <FormattedMessage id="why.item2.text" />
                    </p>
                </div>
            </div>
        </div>
        
    </div>
);

export default WhyPanel;

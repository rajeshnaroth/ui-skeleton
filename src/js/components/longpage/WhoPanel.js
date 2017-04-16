import React from 'react';
import { FormattedMessage } from 'react-intl';
import img1 from '../../../images/logo.svg';
import img2 from '../../../images/logo.svg';

const WhoPanel = (props) => (
    <div className="who-we-are pagelet"> 
        <div className="grid title">
            <h4 className="cell">
                <FormattedMessage id="who.title" />
            </h4>
        </div>
        <div className="grid center">
            <article className="cell statement">
                <FormattedMessage id="who.description" />
            </article>
        </div>
        <div className="grid">
            <div className="bulletbox cell cell-sm-full">
                <h5>
                    <FormattedMessage id="who.person1" />
                </h5>
                <figure className="figure text-center">
                    <img className="founder figure-img img-fluid rounded" src={img1} alt="pic1"/>
                    <figcaption className="text-left">
                        <FormattedMessage id="who.person1.details" />
                    </figcaption>
                </figure>
            </div>
            <div className="bulletbox cell cell-sm-full">
                <h5>
                    <FormattedMessage id="who.person2" />
                </h5>
                <figure className="figure text-center">
                <img className="founder mx-auto figure-img img-fluid rounded align-items-center" src={img2} alt="pic1"/>
                <figcaption className="text-left">
                    <FormattedMessage id="who.person2.details" />
                </figcaption>
                </figure>
            </div>
        </div>
    </div>
);


export default WhoPanel;

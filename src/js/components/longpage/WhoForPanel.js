import React from 'react';
import { FormattedMessage } from 'react-intl';
import newFarmer from '../../../images/new-farmer.jpg';
import smallFarmer from '../../../images/small-farmer.jpg';

const WhoForPanel = (props) => (
    <div className="who-we-do-it-for pagelet"> 
        <div className="grid center title">
            <h4 className="cell">
                <FormattedMessage id="whofor.title" />
            </h4>
        </div>
        <div className="grid bulletbox">
            <article className="bulletbox cell cell-sm-full">
                <h5>
                    <FormattedMessage id="whofor.item1" />
                </h5>
                <div className="figure text-center">
                    <div className="holder">
                        <img className="thumb" src={smallFarmer} alt="smallFarmer"/>
                        <p className="">
                            <FormattedMessage id="whofor.item1.text" />
                        </p>
                    </div>
                </div>
            </article>
            <article className="bulletbox cell cell-sm-full">
                <h5>
                    <FormattedMessage id="whofor.item2" />
                </h5>
                <div className="figure img-fluid rounded">
                    <div className="holder">
                        <img className="cell-share  thumb new-farmer" src={newFarmer} alt="pic1"/>
                        <p className="cell-share">
                            <FormattedMessage id="whofor.item2.text" />
                        </p>
                    </div>
                </div>
            </article>
        </div>
    </div>
);

export default WhoForPanel;

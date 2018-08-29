import React from 'react';
import Progressbar from '../Progressbar';

export default (props) => {
    return (
        <div className={`k-overview-experience ${props.classes}`}>
            <div className="grid-x">
                <div className="cell small-3 k-overview-experience-level"><span className="k-overview-experience-level-label">LVL. </span>{props.level || 0}</div>
                <div className="cell small-6 k-overview-experience-current">25/100</div>
                <div className="cell small-3 k-overview-experience-percent">25%</div>
            </div>
            <Progressbar progress="25" />
        </div>
    )
}
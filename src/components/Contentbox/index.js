import React from 'react';

export default (props) => {
    return (
        <div className="k-content-box">
            <div className="k-content-box-icon">
                <img src={props.icon} alt={props.label} />
            </div>
            <div className="k-content-box-info">
                <p className="k-content-box-info-label">{props.label.toUpperCase()}</p>
                <p className="k-content-box-info-value">{props.value}</p>
            </div>
        </div>
    )
}
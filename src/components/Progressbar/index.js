import React from 'react';

export default (props) => {
    const style = {
        height: '10px'
    };
    return (
        <div className="k-progress" style={style} role="progressbar" tabIndex="0" aria-valuenow={props.progress} aria-valuemin="0" aria-valuetext={`${props.progress} percent`} aria-valuemax="100">
            <span className="k-progress-meter" style={{ width: `${props.progress}%` }}>
            </span>
        </div>
    )
}
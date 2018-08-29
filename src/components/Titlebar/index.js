import React from 'react';
import icon from '../../images/kaizokuo_icon.jpg'

export default (props) => {
    return (
        <nav className="clearfix k-title-bar">
            <img src={icon} className="k-icon" alt="Kaizokuo Icon" />
            <h4 role="banner" className="k-banner k-header">{props.banner}</h4>
            <div className="k-widgets">
                <span className="k-widgets-logout" onClick={props.logout}>Logout</span>
            </div>
        </nav>
    )
}
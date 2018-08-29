import React from 'react';
import Navigation from '../Navigation';

export default (props) => {
    return (
        props.player ? <div className="k-off-canvas">
            <div className="k-off-canvas-grid">
                <div className="k-off-canvas-player-info show-for-large">
                    <h3 className="k-header">{props.player.name.epithet}</h3>
                    <img className="k-off-canvas-thumbnail" src={props.player.avatar.thumbnail ? props.player.avatar.thumbnail : 'https://placehold.it/150x150'} alt="Player Avatar" />
                    <p className="k-off-canvas-player-name">{`${props.player.name.first.toUpperCase()} ${props.player.name.last.toUpperCase()}`}</p>
                </div>
                <div className="k-off-canvas-menu">
                    <Navigation navList={props.navList} onSelect={props.onSelect} activeClasses="k-off-canvas-menu-active" />
                </div>
            </div>
        </div> : null
    )
}
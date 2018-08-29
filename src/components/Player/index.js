import React from 'react';
import gold from '../../images/gold.svg';
import money from '../../images/money.png';
import attack from '../../images/attack.svg';
import defense from '../../images/defense.svg';
import health from '../../images/health.svg';

const Player = props => {
    return (
        props.player ? <div className="player media-object">
            <div className="media-object-section">
                <div className="thumbnail">
                    <img className="player-avatar" src={props.player.avatar.thumbnail} alt="Player Avatar" />
                </div>
            </div>
            <div className="media-object-section">
                <h4>{props.player.name.epithet}</h4>
                <p>{`${props.player.name.first} ${props.player.name.last}`}</p>
                <div className="player-stats">
                    <span> <img src={gold} alt="gold icon" /> {props.player.stats.gold}</span>
                    <span> <img src={money} alt="money icon" /> {props.player.stats.money}</span>
                    <span> <img src={attack} alt="attack icon" /> {props.player.stats.attack}</span>
                    <span> <img src={defense} alt="defense icon" /> {props.player.stats.defense}</span>
                    <span> <img src={health} alt="health icon" /> {props.player.stats.health}</span>
                </div>
            </div>

        </div> : null
    )
}

export default Player;

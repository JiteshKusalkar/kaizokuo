import React from 'react';
import Contentbox from '../../components/Contentbox';
import ExperienceOverview from '../../components/ExperienceOverview';
import helperService from '../../utils';
import zen from '../../images/zen.png';

const getStats = (stats) => {
    let statsGrid = [];
    for (let attr in stats) {
        statsGrid.push(
            <div key={attr} className="k-info-grid cell medium-6 large-4">
                <Contentbox label={attr} icon={helperService.getIcon(attr)} value={new Intl.NumberFormat('en-US').format(stats[attr])} />
            </div>
        )
    }
    return statsGrid;
}

export default (props) => {
    return (
        props.player ? <div>
            <div className="k-overview-content grid-x">
                <ExperienceOverview level="888" classes="cell medium-6" />
                <div className="k-overview-bounty cell medium-6">
                    <span className="k-overview-bounty-label">BOUNTY: </span>
                    <span className="k-bounty">{props.player.bounty}</span>
                    <img className="k-currency-symbol" src={zen} alt="Zen" />
                </div>
            </div>
            <div className="k-overview-content grid-x">
                {getStats(props.player.stats)}
            </div>
        </div> : null
    )
}
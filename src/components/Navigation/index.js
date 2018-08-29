import React from 'react';
import helperService from '../../utils';

export default (props) => {
    return (
        <ul>
            {
                props.navList.map((nav, i) => {
                    return <li key={i} onClick={() => { props.onSelect(nav) }} className={nav.selected ? props.activeClasses : ''}>
                        <img src={helperService.getIcon(nav.value)} alt={nav.value} />
                        {nav.value.toUpperCase()}
                    </li>
                })
            }
        </ul>
    )
}
// Icons
import attack from '../images/attack.svg';
import bounty from '../images/bounty.svg';
import defense from '../images/defense.svg';
import gold from '../images/gold.svg';
import health from '../images/health.svg';
import money from '../images/money.svg';
import overview from '../images/overview.svg';
import profile from '../images/profile.svg';
import settings from '../images/settings.svg';
import stamina from '../images/stamina.svg';
import no_icon from '../images/no_icon.svg';

export default {
    getIcon: (attr) => {
        switch(attr.toLowerCase()) {
            case 'bounty': return bounty;
            case 'attack': return attack;
            case 'defense': return defense;
            case 'health': return health;
            case 'gold': return gold;
            case 'money': return money;
            case 'overview': return overview;
            case 'profile': return profile;
            case 'settings': return settings;
            case 'stamina': return stamina;
            default: return no_icon;
        }
    }
}
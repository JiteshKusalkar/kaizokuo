import React from 'react';
import { connect } from 'react-redux';
import store from '../../config/store';
import actions from '../../config/actions';
import history from '../../helper';
import APIServices from '../../api/api-services';

// Components
//import Player from '../../components/Player'
import Titlebar from '../../components/Titlebar';
import Navbar from '../../components/Navbar';
import Overview from '../overview';
import Profile from '../profile';
import Settings from '../settings';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: null,
            view: 'Overview'
        };
    }

    componentDidMount() {
        APIServices.getPlayer().then(player => {
            this.setState({ player })
        })
    }

    getView() {
        switch (this.props.view.selected) {
            case 'Overview': return <Overview player={this.state.player} />
            case 'Profile': return <Profile />
            case 'Settings': return <Settings />
            default: return null
        }
    }

    render() {
        return (
            <div className="dashboard">
                <Titlebar logout={this.props.logout} banner="Kaizokuo" />
                <div className="k-body-content">
                    <Navbar navList={this.props.view.navList} onSelect={this.props.onSelect} player={this.state.player} />
                    <div className="k-container">
                        {this.getView()}
                    </div>
                </div>
                {/* <Player player={this.state.player} /> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch({ type: actions.LOG_OUT });
            history.replace('/login');
        },
        onSelect: (nav) => {
            dispatch({ type: actions.SELECT, payload: nav })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

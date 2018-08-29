import React from 'react';
import { connect } from 'react-redux';

import store from '../../config/store';
import actions from '../../config/actions';
import history from '../../helper';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            showHint: false // For temporary use
        };
        this.login = this.login.bind(this);
        this.changeInput = this.changeInput.bind(this);
    }

    login(event) {
        event.preventDefault();
        if (this.state.username.trim() === 'admin' && this.state.password.trim() === '1234') {
            store.dispatch({ type: actions.LOG_IN });
            history.replace('/dashboard');
        } else {
            this.setState({ showHint: true });
        }
    }

    changeInput(event) {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState({ ...state });
    }

    render() {
        return (
            <form onSubmit={this.login}>
                <label>
                    Username:
                    <input type="text" name="username" value={this.state.username} onChange={this.changeInput} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={this.state.password} onChange={this.changeInput} />
                </label>
                {this.state.showHint ? <p className="help-text" role="alert" aria-live="polite">Please use admin/1234 as username/password</p> : null}
                <input className="button" type="submit" value="Login" />
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    };
}

export default connect(mapStateToProps)(Login);

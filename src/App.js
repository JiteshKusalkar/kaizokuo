import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './helper';

// Store
import store from './config/store';

// Components
import Login from './features/login';
import Dashboard from './features/dashboard';

class App extends Component {
    isLoggedIn = false;
    constructor() {
        super();
        this.isLoggedIn = store.getState();
    }
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" render={() => (
                        store.getState().isLoggedIn ?
                            <Redirect to="/dashboard" /> : <Redirect to="/login" />
                        )} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/dashboard" component={Dashboard} />
                </Switch>
            </Router>
        );
    }
}

export default App;

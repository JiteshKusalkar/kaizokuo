import { createStore, combineReducers } from 'redux';

// Reducers
import { loginReducer, navigationReducer } from './reducer';

const rootReducer = combineReducers({
    isLoggedIn: loginReducer,
    view: navigationReducer
});

export default createStore(rootReducer);

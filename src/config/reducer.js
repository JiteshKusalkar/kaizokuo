import actions from './actions';
import initialState from './initialState';

const loginReducer = (state = initialState.loginReducerState, action) => {
    switch (action.type) {
        case actions.LOG_IN:
            return true;
        default:
            return state;
    }
}

const navigationReducer = (state = initialState.navigationReducerState, action) => {
    switch (action.type) {
        case actions.SELECT:
            return {
                navList: state.navList.map(e => {
                    return { ...e, selected: action.payload.value.toLowerCase() === e.value.toLowerCase() };
                }),
                selected: action.payload.value
            }
        default:
            return state;
    }
}

export {
    loginReducer,
    navigationReducer
};

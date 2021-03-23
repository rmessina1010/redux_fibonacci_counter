import * as ActionTypes from '../actions/actionTypes';

export const counterReducer = (state = { lastCounterVal: 0 }, action) => {
    switch (action.type) {
        case ActionTypes.RESET_COUNTER:
            return { ...state, lastCounterVal: action.payload };
        default:
            return state;
    }
}

export const counterAddSubReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COUNTER:
            return { ...state, count: state.count + action.payload };
        case ActionTypes.SUB_COUNTER:
            return { ...state, count: state.count - action.payload };
        case ActionTypes.RESET_COUNTER:
            return { ...state, count: action.base };
        default:
            return state;
    }
}

export const counterIntReducer = (state = { counterInt: 5 }, action) => {
    switch (action.type) {
        case ActionTypes.SET_COUNTER_INT:
            return { ...state, counterInt: action.payload };
        default:
            return state;
    }
}

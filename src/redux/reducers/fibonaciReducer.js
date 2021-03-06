import * as ActionTypes from '../actions/actionTypes';

export const fibonaciReducer = (state = { nth: 1, sum: 0, next: 1, count: 0 }, action) => {
    switch (action.type) {
        case ActionTypes.FIBONACI_NEXT:
            return { ...state, nth: state.nth + 1, sum: state.sum + state.next, next: state.sum, count: action.payload };
        case ActionTypes.FIBONACI_PREV:
            return state.nth > 1 ? { ...state, nth: state.nth - 1, sum: state.next, next: state.sum - state.next, count: action.payload } : state;
        default:
            return state;
    }
}
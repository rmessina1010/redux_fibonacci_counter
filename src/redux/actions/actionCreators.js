import * as ActionTypes from './actionTypes';

export const resetCounter = (data, start) => ({
    type: ActionTypes.RESET_COUNTER,
    payload: data,
    base: start
});

export const addCounter = data => ({
    type: ActionTypes.ADD_COUNTER,
    payload: data
});

export const subCounter = data => ({
    type: ActionTypes.SUB_COUNTER,
    payload: data
});

export const fibonaciNext = (data) => ({
    type: ActionTypes.FIBONACI_NEXT,
    payload: data//
});

export const fibonaciPrev = (data) => ({
    type: ActionTypes.FIBONACI_PREV,
    payload: data//
});


export const setCounterInt = (int) => ({
    type: ActionTypes.SET_COUNTER_INT,
    payload: int//
});
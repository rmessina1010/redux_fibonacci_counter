// import all reducers here...
import { counterReducer, counterAddSubReducer, counterIntReducer } from './counterReducer';
import { fibonaciReducer } from './fibonaciReducer';
//
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    //key value pair of imported reducers
    counterReducer: counterReducer,
    counterAddSubReducer: counterAddSubReducer,
    fibonaciReducer: fibonaciReducer,


    counterIntReducer: counterIntReducer

});

export default allReducers;
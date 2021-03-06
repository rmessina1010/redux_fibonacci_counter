import { createStore } from 'redux';
import allReducers from './reducers/_allReducers';

const store = createStore(
    allReducers
    //, ...apply middleware if desired
);
export default store;
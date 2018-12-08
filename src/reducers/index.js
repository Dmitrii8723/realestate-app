import {combineReducers} from 'redux';
import PropertyReducer from './reducer-properties';

const allReducers = combineReducers({
    properties: PropertyReducer

});

export default allReducers;
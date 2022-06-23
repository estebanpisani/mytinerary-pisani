import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import itineraryReducer from './itineraryReducer';

const mainReducer = combineReducers({
    cityReducer,
    itineraryReducer
});

export default mainReducer;
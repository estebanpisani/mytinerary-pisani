import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import itineraryReducer from './itineraryReducer';
import userReducer from './userReducer';

const mainReducer = combineReducers({
    cityReducer,
    itineraryReducer,
    userReducer
});

export default mainReducer;
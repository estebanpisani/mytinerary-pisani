import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import itineraryReducer from './itineraryReducer';
import activityReducer from './activityReducer';
import userReducer from './userReducer';
import dataReducer from './dataReducer';

const mainReducer = combineReducers({
    cityReducer,
    itineraryReducer,
    activityReducer,
    userReducer,
    dataReducer
});

export default mainReducer;
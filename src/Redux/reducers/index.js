import { combineReducers } from 'redux';

// the built-in reducer for redux-ui-router
//import { router } from 'redux-ui-router'; --> FUCK THIS SHIT

// our custom data reducer for the data points
import data from './todoReducer';

export default combineReducers({ 
    todo: data 
});
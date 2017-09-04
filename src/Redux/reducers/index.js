import { combineReducers } from 'redux';

// the built-in reducer for redux-ui-router
import { router } from 'redux-ui-router';

// our custom data reducer for the data points -> this go to the controllers
import todo from './todoReducer';
import slider from './slider.reducer';

export default combineReducers({ todo, router, slider });
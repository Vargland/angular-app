import _ from 'lodash';
import mock from '../mock';
import type from '../constants'

const initialState = {
    isFetching: false,
    error: null,
    todo: mock()
};

export default (state = initialState, action) => {
    let actionType = action.type;

    switch (actionType) {
        case 'FETCH_TODO':
            return Object.assign({}, state, {
                isFetching: true
            });
       
        case 'FETCH_TODO_SUCCESS':
            let newState = angular.extend({}, state);

            return newState;
                    
        case 'FETCH_TODO_ERROR':
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error,
                todo: []
            });
        
        default:
            return state;
    }
}


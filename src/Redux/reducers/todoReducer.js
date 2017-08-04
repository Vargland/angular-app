import _ from 'lodash';
import type from '../constants'

const initialState = {
    isFetching: false,
    error: null,
    items: []
};

export default (oldState = initialState, action) => {
    let actionType = action.type;

    switch (actionType) {
        case 'FETCH_TODO':
            return Object.assign({}, oldState, {
                isFetching: true
            });
        case 'FETCH_TODO_SUCCESS':
            return Object.assign({}, oldState, {
                isFetching: false,
                items: action.items
            });
        case 'FETCH_TODO_ERROR':
            return Object.assign({}, oldState, {
                isFetching: false,
                error: action.error
            })
        default:
            return oldState;
    }
}


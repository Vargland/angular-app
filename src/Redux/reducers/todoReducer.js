import _ from 'lodash';
import addTodo from '../actions/addTodo'
import { FETCH_TODO_SUCCESS, FETCH_TODO_FAIL } from '../actions/fetchTodo'

const initialState = {};

export default function (oldState = initialState, action) {
    let actionType = action.type;
    let newState = Object.assign({}, oldState);

    if(actionType === 'ADD_TODO') {
        newState.todo = initialState.concat(
            [{
                "description": undefined,
                "done": false,
                "important": false,
                "editable": false              
            }]
        )
    };

    if (actionType == 'FETCH_TODO') {
        initialState = getMockTodo;
    }

    return newState;
}
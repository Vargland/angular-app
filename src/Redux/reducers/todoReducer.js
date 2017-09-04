import _ from 'lodash';
import mock from '../mock';
import type from '../constants'

const initialState = {
    fetching: false,
    error: null,
    todo: mock.getMockTodo()
};

export default (state = initialState, action) => {
    let actionType = action.type;
    let newState = angular.extend({}, state);

    switch (actionType) {
        
        case 'FETCH_TODO': //NOT USED
            
            return Object.assign({}, state, {
                fetching: true
            });
       
        case 'FETCH_TODO_SUCCESS': //NOT USED

            return newState;
                    
        case 'FETCH_TODO_ERROR': // NOT USED
            
            return Object.assign({}, state, {
                fetching: false,
                error: action.error,
                todo: []
            });
        
        case 'ADD_TODO':
            newState.todo.push({
                description: action.data,
                done: false,
                important: false,
                editable: false               
            });  

            return newState;
        
        case 'EDIT_TODO':
            newState.todo[action.data].editable = true;

            return newState

        case 'SAVE_TODO':
            newState.todo[action.data].editable = false;
            newState.todo[action.data].description = action.description;

            return newState;

        case 'DONE_TODO':
            newState.todo[action.data].done = !newState.todo[action.data].done;

            return newState;

        case 'IMPORTANT_TODO':
            newState.todo[action.data].important = !newState.todo[action.data].important;

            return newState;
        
        case 'DELETE_TODO':
            newState.todo.splice(action.data ,1)

            return newState;
        
        default:
            return state;
    }
}


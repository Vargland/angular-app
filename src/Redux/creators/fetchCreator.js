import thunk from 'redux-thunk';

const fetchTodo = () => ({
    type: 'FETCH_TODO'
});

const fetchTodoSuccess = (items) => ({
    type: 'FETCH_TODO_SUCCESS',
    items
});

const fetchTodoError = (error) => ({
    type: 'FETCH_TODO_ERROR',
    error
});

const fetchAllTodo = (dispatch, getState) => {
    dispatch(fetchTodo());

    return fetch(getState)
        .then(response => dispatch(fetchTodoSuccess(response.items)))
        .catch(response => dispatch(fetchTodoError(response.error)));
}